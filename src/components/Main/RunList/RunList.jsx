import React from 'react';
import Run from './Run/Run';
import "./RunList.css";

const RunList = ({ runs }) => {
    return (
        <div className="run-list">
            {runs.map((run) => (
                <Run key={run.id} pipeline={{
                    id: "PIPE-1",
                    name: "flowk-test",
                    status: "cloudy",
                    stages: ["Data Preparation", "Model Training", "Model Evaluation", "Deploy to QA"]
                }} run={run} />
            ))}
        </div>
    );
};

export default RunList;
