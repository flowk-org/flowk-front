import { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useQuery } from '@tanstack/react-query';

const eventToStageMapping = {
    DataPreparedEvent: { stageIndex: 0, status: "completed" },
    DataPreparationFailedEvent: { stageIndex: 0, status: "failed" },
    ModelTrainedEvent: { stageIndex: 1, status: "completed" },
    ModelTrainingFailedEvent: { stageIndex: 1, status: "failed" },
    ModelEvaluationStartedEvent: { stageIndex: 2, status: "running" },
    ModelEvaluationCompletedEvent: { stageIndex: 2, status: "completed" },
    ModelEvaluationFailedEvent: { stageIndex: 2, status: "failed" },
    ModelDeploymentCompletedEvent: { stageIndex: 3, status: "completed" },
    ModelDeploymentFailedEvent: { stageIndex: 3, status: "failed" }
};

const fetchRuns = async (page, size) => {
    const response = await fetch(`http://localhost:8080/api/runs?page=${page}&size=${size}`);
    if (!response.ok) {
        throw new Error('Ошибка загрузки данных о запусках');
    }
    const data = await response.json();
    return data;
};

export const useRuns = (page, size) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['runs', page, size],  // Это ключ для кэширования и синхронизации данных
        queryFn: () => fetchRuns(page, size),
        keepPreviousData: true, // Это важно для корректной работы пагинации
    });

    const [runs, setRuns] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (data) {
            setRuns(data.content);
            setTotalPages(data.totalPages); // Total number of pages from the API
        }
    }, [data]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: (str) => console.log('STOMP Debug:', str),
        });

        stompClient.onConnect = () => {
            stompClient.subscribe('/topic/app', (message) => {
                try {
                    const event = JSON.parse(message.body);
                    const mapping = eventToStageMapping[event.eventType];
                    if (!mapping) return;

                    setRuns((prevRuns) => {
                        const runExists = prevRuns.some((run) => run.id.toString() === event.runId);
                        if (runExists) {
                            return prevRuns.map((run) => {
                                if (run.id.toString() === event.runId) {
                                    const newStages = [...run.stages];
                                    newStages[mapping.stageIndex] = mapping.status;
                                    const newStageStartTimes = [...(run.stageStartTimes || [])];
                                    newStageStartTimes[mapping.stageIndex] = mapping.status === "running" ? event.timestamp : null;
                                    const newStatus = newStages.every(s => s === "completed")
                                        ? "Completed"
                                        : newStages.includes("failed")
                                            ? "Failed"
                                            : "Running";
                                    return { ...run, stages: newStages, status: newStatus, stageStartTimes: newStageStartTimes };
                                }
                                return run;
                            });
                        } else {
                            const newRun = {
                                id: parseInt(event.runId.replace("run-", "")),
                                date: new Date(event.timestamp).toLocaleString("en-US", { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
                                status: mapping.status === "failed" ? "Failed" : "Running",
                                stages: ["pending", "pending", "pending", "pending"].map((s, index) => index === mapping.stageIndex ? mapping.status : s),
                                stageStartTimes: ["pending", "pending", "pending", "pending"].map((s, index) => index === mapping.stageIndex && mapping.status === "running" ? event.timestamp : null),
                                replayOfRun: null,
                                replayedFromStages: null
                            };
                            prevRuns.pop();
                            return [newRun, ...prevRuns];
                        }
                    });
                } catch (error) {
                    console.error('Ошибка обработки STOMP-сообщения:', error);
                }
            });
        };

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, []);

    return { runs, totalPages, isLoading, error };
};
