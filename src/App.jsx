import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="App d-flex" style={{ minHeight: '100vh' }}>
            {/* Сайдбар: фиксированная ширина */}
            <div className={`sidebar ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
                <Sidebar />
            </div>
            {/* Основной контент: занимает оставшееся пространство */}
            <div className="flex-grow-1" style={{ backgroundColor: '#f2f2f2' }}>
                <MainContent />
            </div>
        </div>
    );
}

export default App;