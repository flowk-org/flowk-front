import React from 'react';
import RunList from './RunList/RunList';
import '../Main/Main.css';

const Main = () => {
    return (
        <div className="mainContainer">
            <div className="header">
                <div className="headerContent">
                    <div className="searchContainer">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="form-control searchInput"
                        />
                    </div>
                    <div className="avatarContainer">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Аватар"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
            <div className="content">
                <h2 className="runsTitle">Runs</h2>
                <RunList />
            </div>
        </div>
    );
};

export default Main;
