import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './App.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app-container">
                <aside className="sidebar">
                    <Menu />
                </aside>
                <main className="main-content">
                    <Main />
                </main>
            </div>
        </QueryClientProvider>
    );
}

export default App;
