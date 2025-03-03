import React from 'react';
import './Stage.css';

const mapStatusToProperties = (status) => {
    switch (status) {
        case "completed":
            return {color: '#8CC04F', icon: "bi-check2", border: 'none'};
        case "running":
            return {color: '#5190D9', icon: '', border: 'none'};
        case "failed":
            return {color: '#D54D53', icon: "bi-x-lg", border: 'none'};
        default:
            return {color: '#FFFFFF', icon: '', border: '4px solid #B3B3B3'};
    }
}

const enhanceLine = (position, isRight) =>
    ((position === 0 && isRight === false) || (position === -1 && isRight === true)) ?
        '' :
        "#B3B3B3"


const Stage = ({status, title, position}) => {
    const {color, icon, border} = mapStatusToProperties(status)
    const leftLineBg = enhanceLine(position, false)
    const rightLineBg = enhanceLine(position, true)
    return (
        <div className="stage-container">
            <div className="stage-with-lines">
                <div className="left-side-line" style={{backgroundColor: `${leftLineBg}`}}></div>
                <div className="stage"
                     style={{
                         backgroundColor: color,
                         border: border
                     }}>
                    <i className={`bi ${icon} stage-icon`}></i>
                </div>
                <div className="right-side-line" style={{backgroundColor: `${rightLineBg}`}}></div>
            </div>
            <div className="stage-title">{title}</div>
        </div>
    );
}

export default Stage;
