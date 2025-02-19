import React from 'react';
import RunList from './RunList/RunList';

const Main = () => {
    return (
        <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
            {/* Хэдер */}
            <div className="bg-white p-3" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex justify-content-between align-items-center">
                    {/* Поле поиска */}
                    <div className="d-flex align-items-center" style={{ width: '80%' }}>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="form-control"
                            style={{ borderRadius: '20px', border: '1px solid #e9ecef', padding: '0.5rem 1rem' }}
                        />
                    </div>
                    {/* Иконка аватара */}
                    <div className="d-flex align-items-center">
                        <img
                            src="https://via.placeholder.com/40" // Замените на вашу ссылку
                            alt="Аватар"
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </div>
                </div>
            </div>
            {/* Основной контент */}
            <div className="p-4">
                <h1 className="runs-title" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>Runs</h1>
                <RunList />
            </div>
        </div>
    );
};

export default Main;