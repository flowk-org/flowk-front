import React from 'react';

const RunBody = ({ id, date }) => {
    return (
        <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#333' }}>#{id}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#6c757d' }}>{date}</span>
            </div>
        </div>
    );
};

export default RunBody;