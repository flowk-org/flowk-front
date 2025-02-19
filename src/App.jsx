import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './App.css';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="App d-flex" style={{ minHeight: '100vh' }}>
            {/* Сайдбар: фиксированная ширина */}
            <div className={`sidebar ${showSidebar ? 'd-block' : 'd-none d-lg-block'}`}>
                <Menu />
            </div>
            {/* Основной контент: занимает оставшееся пространство */}
            <div className="flex-grow-1" style={{ backgroundColor: '#f2f2f2' }}>
                <Main />
            </div>
        </div>
    );
}

export default App;