import React, { useState, useEffect } from 'react';
import "./RunList.css";
import Run from "../Pipeline/Run/Run";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const RunList = () => {
    const pipeline = {
        id: "PIPE-1",
        name: "flowk-test",
        status: "cloudy",
        stages: ["Data Preparation", "Model Training", "Model Evaluation", "Deploy to QA"]
    };

    const [runs, setRuns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRuns = async () => {
            try {
                console.log('Отправка запроса к http://localhost:8080/api/runs');
                const response = await fetch('http://localhost:8080/api/runs', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Полученные данные:', data);
                setRuns(data);
                setIsLoading(false);
            } catch (err) {
                console.error('Ошибка загрузки исторических данных:', err);
                console.error('Детали ошибки:', err.message);
                setError(`Не удалось загрузить данные о запусках: ${err.message}`);
                setIsLoading(false);
            }
        };

        fetchRuns();
    }, []);

    useEffect(() => {
        console.log('Инициализация STOMP на http://localhost:8080/ws');
        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: (str) => {
                console.log('STOMP Debug:', str);
            },
        });

        stompClient.onConnect = (frame) => {
            console.log('STOMP-соединение установлено:', frame);
            stompClient.subscribe('/topic/app', (message) => {
                try {
                    const updatedRun = JSON.parse(message.body);
                    console.log('STOMP сообщение:', updatedRun);
                    if (updatedRun && typeof updatedRun.id === 'number') {
                        setRuns((prevRuns) => {
                            const runExists = prevRuns.some((run) => run.id === updatedRun.id);
                            if (runExists) {
                                return prevRuns.map((run) =>
                                    run.id === updatedRun.id
                                        ? { ...run, ...updatedRun }
                                        : run
                                );
                            } else {
                                return [updatedRun, ...prevRuns];
                            }
                        });
                    }
                } catch (error) {
                    console.error('Ошибка обработки STOMP-сообщения:', error);
                }
            });
        };

        stompClient.onStompError = (frame) => {
            console.error('Ошибка STOMP:', frame);
        };

        stompClient.activate();

        return () => {
            console.log('Закрытие STOMP-соединения');
            stompClient.deactivate();
        };
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="run-list" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
            {runs.map((run) => (
                <Run key={run.id} pipeline={pipeline} run={run} />
            ))}
        </div>
    );
};

export default RunList;