import React from 'react';
import RunPipe from "../RunPipe/RunPipe";
import '../Run/Run.css';

const Run = ({ id, date, status, stages }) => {
    const statusColor = status === 'Завершен' ? '#28a745' : status === 'Ошибка' ? '#dc3545' : '#6c757d';

    return (
        <div className="runContainer">
            <div className="runHeader">
                {/* ID запуска */}
                <span className="runId">#{id}</span>
                <span className="runDate">{date}</span>
                <span className="runStatus" style={{ color: statusColor }}>
                    {status}
                </span>
            </div>
            <RunPipe stages={stages} />
        </div>
    );
};

export default Run;