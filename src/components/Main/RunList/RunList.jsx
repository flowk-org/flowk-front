import React from 'react';
import "./RunList.css"
import Run from "../Pipeline/Run/Run";
import "./RunList.css"

const RunList = () => {
    const runs = [
        {
            id: 3,
            date: "Feb 15, 21:20",
            status: "Failed",
            stages: [
                {title: "Data Preparation", status: "pending"},
                {title: "Model Training", status: "pending"},
                {title: "Model Evaluation", status: "failed"},
                {title: "Deploy to QA", status: "failed"}
            ],
            replayOfRun: {id: 2, stage: 3}
        },
        {
            id: 2,
            date: "Feb 15, 21:20",
            status: "Running",
            stages: [
                {title: "Data Preparation", status: "completed"},
                {title: "Model Training", status: "completed"},
                {title: "Model Evaluation", status: "running"},
                {title: "Deploy to QA", status: "pending"}
            ],
            replayedFromStages: [3]
        },
        {
            id: 1,
            date: "Feb 15, 21:18",
            status: "Completed",
            stages: [
                {title: "Data Preparation", status: "completed"},
                {title: "Model Training", status: "completed"},
                {title: "Model Evaluation", status: "completed"},
                {title: "Deploy to QA", status: "completed"}
            ]
        }
    ];

    return (
        <div className="run-list" style={{backgroundColor: '#ffffff', borderRadius: '12px'}}>
            {runs.map((run) => (
                <Run run={run}/>
            ))}
        </div>
    );
};

export default RunList;