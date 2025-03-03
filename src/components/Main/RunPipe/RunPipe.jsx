import React from 'react';
import RunStage from '../RunStage/RunStage';
import '../RunPipe/RunPipe.css'; // Импортируем стили

const RunPipe = ({ stages }) => {
    return (
        <div className="runPipeContainer">
            {stages.map((stage, index) => (
                <div key={index} className="runPipeStageWrapper">
                    <RunStage stageName={stage.name} isCompleted={stage.isCompleted} />
                    {index < stages.length - 1 && (
                        <span className="runPipeArrow">
                            ➔
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RunPipe;