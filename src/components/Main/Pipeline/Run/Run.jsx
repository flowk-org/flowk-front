import React from 'react';
import Pipeline from "../Pipeline/Pipeline";
import RunInfo from "../RunInfo/RunInfo";  // Импортируем новый компонент
import "./Run.css"

const Run = () => {
    const date = "Feb 15, 21:20";
    const status = "Running";
    const runId = 2

    return (
        <div className="run-container">
            <div className="run-info-wrapper">
                <RunInfo runId={runId} date={date} status={status} />
            </div>
            <div className="pipeline-wrapper">
                <Pipeline />
            </div>
        </div>
    );
}

export default Run;
