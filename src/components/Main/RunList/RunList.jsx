import React from 'react';
import Run from '../Run/Run';

const RunList = () => {
    const runs = [
        {
            id: 1,
            date: '2023-10-01 14:30',
            status: 'Завершен',
            stages: [
                { name: 'Начало', isCompleted: true },
                { name: 'В процессе', isCompleted: true },
                { name: 'Завершен', isCompleted: true },
            ],
        },
        {
            id: 2,
            date: '2023-10-02 09:15',
            status: 'В процессе',
            stages: [
                { name: 'Начало', isCompleted: true },
                { name: 'В процессе', isCompleted: false },
                { name: 'Завершен', isCompleted: false },
            ],
        },
        // Другие run'ы
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
            {runs.map((run) => (
                <Run
                    key={run.id}
                    id={run.id}
                    date={run.date}
                    status={run.status}
                    stages={run.stages} // Передаем этапы
                />
            ))}
        </div>
    );
};

export default RunList;