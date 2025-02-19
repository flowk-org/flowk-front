import React from 'react';
import RunBody from '../RunBody/RunBody';

const Run = ({ id, date, status, stages }) => {
    return (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', marginBottom: '16px', padding: '16px' }}>
            <RunBody id={id} date={date} status={status} stages={stages} />
        </div>
    );
};

export default Run;
