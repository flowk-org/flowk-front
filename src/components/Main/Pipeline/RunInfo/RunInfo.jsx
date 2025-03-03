import React from 'react';
import './RunInfo.css';
import {Badge} from "react-bootstrap";
import {mapStatusToColor} from "../../../../utils/utils";


const RunInfo = ({runId, date, status}) => {
    const badgeColor = mapStatusToColor(status.toLowerCase())
    return (
        <div className="run-info-container">
            <div className="run-info-left">
                <Badge style={{backgroundColor: badgeColor}} className="badge-custom" bg={"status-color-danger"}>
                    {`#${runId}`}
                </Badge>
                {date}
                <i className="bi bi-chevron-down fold-icon"></i>
            </div>
            <div className="run-info-right">
                {status}
            </div>
        </div>
    );
}

export default RunInfo;
