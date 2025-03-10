import React from 'react';
import "./RunList.css"
import Run from "../Pipeline/Run/Run";
import "./RunList.css"

const RunList = () => {
    const pipeline = {
        id: "PIPE-1",
        name: "flowk-pipeline-example",
        status: "cloudy",
        stages: ["Data Preparation", "Model Training", "Model Evaluation", "Deploy to QA"]
    }
    const runs = [
        {
            id: 4,
            date: "Feb 15, 21:20",
            status: "Running",
            stages: ["blank", "blank", "running", "pending"],
            replayOfRun: {id: 2, stage: 3}
        },
        {
            id: 3,
            date: "Feb 15, 21:20",
            status: "Failed",
            stages: ["blank", "blank", "failed", "failed"],
            replayOfRun: {id: 2, stage: 3}
        },
        {
            id: 2,
            date: "Feb 15, 21:20",
            status: "Failed",
            stages: ["completed", "completed", "failed", "failed"],
            replayedFromStages: [3]
        },
        {
            id: 1,
            date: "Feb 15, 21:18",
            status: "Completed",
            stages: ["completed", "completed", "completed", "completed"],
        }
    ];

    return (
        <div className="run-list" style={{backgroundColor: '#ffffff', borderRadius: '12px'}}>
            {runs.map((run) => (
                <Run pipeline={pipeline} run={run}/>
            ))}
        </div>
    );
};

export default RunList;