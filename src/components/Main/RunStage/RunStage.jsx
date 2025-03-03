import React from 'react';
import '../RunStage/RunStage.css';

const RunStage = ({stageName, isCompleted}) => {
    return (
        <div className="runStageContainer">
            <div
                className="runStageCircle"
                style={{backgroundColor: isCompleted ? '#28a745' : '#6c757d'}}>
                {isCompleted ? '✔' : ''}
            </div>
            <span className="runStageName">{stageName}</span>
        </div>
    );
};

export default RunStage;