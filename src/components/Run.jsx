import React from 'react';
import RunHeader from './RunHeader';
import RunBody from './RunBody';

const Run = ({ id, date, status }) => {
    return (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <RunHeader status={status} />
            <RunBody id={id} date={date} />
        </div>
    );
};

export default Run;