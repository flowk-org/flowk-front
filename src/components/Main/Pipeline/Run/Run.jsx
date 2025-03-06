import React, {useState} from 'react';
import Pipeline from "../Pipeline/Pipeline";
import RunInfo from "../RunInfo/RunInfo";  // Импортируем новый компонент
import "./Run.css";

const Run = ({run}) => {
    const [isPipelineVisible, setIsPipelineVisible] = useState(true);

    return (
        <div className="run-container">
            <div className="run-info-wrapper">
                <RunInfo id={run.id} date={run.date} status={run.status}
                         onFoldClick={() => setIsPipelineVisible(!isPipelineVisible)}/>
            </div>
            {isPipelineVisible && (
                <div className="pipeline-wrapper">
                    <Pipeline stages={run.stages}/>
                </div>
            )}
        </div>
    );
}

export default Run;
