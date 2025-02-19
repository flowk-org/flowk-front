import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <a href="/" className="app-name">
                    <span className="flow">Flow</span>
                    <span className="k">k</span>
                </a>
            </div>
            <ul className="nav flex-column w-100 p-0">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboards">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboards
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/runs">
                        <i className="bi bi-list-task me-2"></i> Runs
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/new-run">
                        <i className="bi bi-plus-circle me-2"></i> New Run
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;