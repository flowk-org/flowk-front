import React, {useState} from 'react';
import Pipeline from "../Pipeline/Pipeline";
import RunInfo from "../RunInfo/RunInfo"; // Импортируем новый компонент
import "./Run.css";

const getLinesFromRun = (run) => {
    const lines = [];

    run.stages.forEach((stage, index) => {
        let line = "";
        if (run.replayedFromStages?.includes(index + 2)) {
            line = "curved-up";
        }
        if (run.replayOfRun?.stage === index + 2) {
            line = "curved-left";
        }
        if (run.replayOfRun?.stage > index + 2) {
            line = "blank"
        }
        lines.push(line);
    });

    return lines;
};

const makeStages =  (stages, run) => {
    const enhancedStages = [];

    stages.forEach((stage, index) => {
        enhancedStages.push({
            title: stage,
            status: run.stages.at(index)
        });
    });

    return enhancedStages;
}

const Run = ({pipeline, run}) => {
    const [isPipelineVisible, setIsPipelineVisible] = useState(true);

    const lines = getLinesFromRun(run);
    const stages = makeStages(pipeline.stages, run)

    return (
        <div className="run-container">
            <div className="run-info-wrapper">
                <RunInfo
                    id={run.id}
                    date={run.date}
                    status={run.status}
                    onFoldClick={() => setIsPipelineVisible(!isPipelineVisible)}
                />
            </div>
            {isPipelineVisible && (
                <div className="pipeline-wrapper">
                    <Pipeline stages={stages} lines={lines}/>
                </div>
            )}
        </div>
    );
};

export default Run;
