import React, { useState, useEffect } from 'react';
import './Stage.css';

const mapStatusToProperties = (status) => {
    switch (status) {
        case "completed":
            return { color: '#8CC04F', icon: "bi-check2", border: 'none' };
        case "running":
            return { color: '#5190D9', icon: 'time', border: 'none' };
        case "failed":
            return { color: '#D54D53', icon: "bi-x-lg", border: 'none' };
        case "pending":
            return { color: '#FFFFFF', icon: '', border: '4px solid #B3B3B3' };
        default:
            return { color: '#FFFFFF', icon: '' };
    }
};

const enhanceLine = (position, isRight) =>
    ((position === 0 && !isRight) || (position === -1 && isRight))
        ? ''
        : "#B3B3B3";

const Stage = ({ status, title, position, startTime }) => {
    const { color, icon, border } = mapStatusToProperties(status);
    const leftLineBg = enhanceLine(position, false);
    const rightLineBg = enhanceLine(position, true);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let interval;
        if (status === "running" && startTime) {
            const start = new Date(startTime).getTime();
            interval = setInterval(() => {
                const now = Date.now();
                const seconds = Math.floor((now - start) / 1000);
                setElapsedTime(seconds);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [status, startTime]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`stage-container ${status}`}>
            <div className="stage-with-lines">
                <div className="left-side-line" style={{ backgroundColor: leftLineBg }}></div>
                <div
                    className="stage"
                    style={{
                        backgroundColor: color,
                        border: border,
                    }}
                >
                    {icon !== "time" ? (
                        <i className={`bi ${icon} stage-icon`}></i>
                    ) : (
                        <div className="time-wrapper">{formatTime(elapsedTime)}</div>
                    )}
                </div>
                <div className="right-side-line" style={{ backgroundColor: rightLineBg }}></div>
            </div>
            <div className="stage-title">{title}</div>
        </div>
    );
};

export default Stage;