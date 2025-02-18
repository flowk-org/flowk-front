import React from 'react';
import Run from './Run';

const RunList = () => {
    const runs = [
        { id: 1, date: '2023-10-01 14:30', status: 'Завершен' },
        { id: 2, date: '2023-10-02 09:15', status: 'В процессе' },
        { id: 3, date: '2023-10-03 16:45', status: 'Ожидание' },
        { id: 4, date: '2023-10-04 11:00', status: 'Завершен' },
        { id: 5, date: '2023-10-05 18:20', status: 'Ошибка' },
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
            {runs.map((run) => (
                <Run key={run.id} id={run.id} date={run.date} status={run.status} />
            ))}
        </div>
    );
};

export default RunList;