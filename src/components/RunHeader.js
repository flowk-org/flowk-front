import React from 'react';

const RunHeader = ({ status }) => {
    return (
        <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span
          style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: status === 'Завершен' ? '#28a745' : status === 'Ошибка' ? '#dc3545' : '#6c757d',
          }}
      >
        {status}
      </span>
        </div>
    );
};

export default RunHeader;