import React from 'react';
import './Pipeline.css';
import Stage from "../Stage/Stage";

const Pipeline = () => {
    const stages = [
        {status: "completed", title: "Data Preparation"},
        {status: "completed", title: "Model Training"},
        {status: "running", title: "Model Evaluation"},
        {status: "pending", title: "Deploy to QA"}
    ];

    return (
        <div className="pipeline-container">
            {stages.map((stage, index) => (
                <React.Fragment key={index}>
                    <div className="stage-wrapper">
                        <Stage status={stage.status}
                               title={stage.title}
                               position={index === stages.length - 1 ? -1 : index}/>
                    </div>
                    {index < stages.length - 1 && <div className="pipeline-line"></div>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Pipeline;
