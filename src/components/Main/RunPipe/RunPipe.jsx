import React from 'react';
import RunStage from '../RunStage/RunStage';

const RunPipe = ({ stages }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {stages.map((stage, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Этап */}
                    <RunStage stageName={stage.name} isCompleted={stage.isCompleted} />
                    {/* Стрелочка (только если не последний этап) */}
                    {index < stages.length - 1 && (
                        <span style={{ margin: '0 8px' }}>
                            ➔
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RunPipe;
