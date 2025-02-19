import React from 'react';

const RunStage = ({ stageName, isCompleted }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Кружок для этапа */}
            <div
                style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: isCompleted ? '#28a745' : '#6c757d',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '12px',
                }}
            >
                {isCompleted ? '✔' : ''}
            </div>
            {/* Название этапа */}
            <span style={{ marginLeft: '8px', fontSize: '14px', color: '#333' }}>{stageName}</span>
        </div>
    );
};

export default RunStage;
