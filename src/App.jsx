import React from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <aside className="sidebar">
                <Menu />
            </aside>
            <main className="main-content">
                <Main />
            </main>
        </div>
    );
}

export default App;
