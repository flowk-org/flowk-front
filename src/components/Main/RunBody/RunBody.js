import React from 'react';
import RunPipe from '../RunPipe/RunPipe';

const RunBody = ({ id, date, status, stages }) => {
    // Выбираем цвет для статуса в зависимости от его значения
    const statusColor = status === 'Завершен' ? '#28a745' : status === 'Ошибка' ? '#dc3545' : '#6c757d';

    return (
        <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                {/* ID запуска */}
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#333' }}>#{id}</span>
                {/* Дата запуска */}
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#6c757d' }}>{date}</span>
                {/* Статус запуска */}
                <span
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: statusColor,
                        marginLeft: 'auto', // Сдвигает статус вправо
                    }}
                >
                    {status}
                </span>
            </div>
            {/* RunPipe для отображения этапов */}
            <RunPipe stages={stages} />
        </div>
    );
};

export default RunBody;
