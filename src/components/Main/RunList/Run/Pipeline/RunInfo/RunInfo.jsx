import React from 'react';
import './RunInfo.css';
import {mapStatusToColor} from "../../../../../../utils/utils";
import Badges from '../../../../../../commons/Badge/Badges'

const RunInfo = ({id, date, status, onFoldClick}) => {
    const badgeColor = mapStatusToColor(status.toLowerCase());

    return (
        <div className="run-info-container">
            <div className="run-info-left">
                <Badges text={`#${id}`} bgColor={badgeColor}/>
                <div className="date-text-wrapper">{date}</div>
                <i className="bi bi-chevron-down fold-icon" onClick={onFoldClick}></i>
            </div>
            <div className="run-info-right">
                {status}
            </div>
        </div>
    );
}

export default RunInfo;
