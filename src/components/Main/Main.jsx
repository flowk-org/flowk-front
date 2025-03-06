import React from 'react';
import RunList from './RunList/RunList';
import '../Main/Main.css';
import Pipeline from "./Pipeline/Pipeline/Pipeline";
import Run from "./Pipeline/Run/Run";

const Main = () => {
    return (
        <div className="mainContainer">
            <div className={`header bg-white p-3`}>
                <div className="headerContent">
                    <div className="searchContainer">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className={`form-control $"searchInput}`}
                        />
                    </div>
                    {/* Иконка аватара */}
                    <div className="avatarContainer">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Аватар"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
            {/*/!*<Stage status="completed" title={"Deploy to Dev"}/>*!/*/}
            {/*<Pipeline></Pipeline>*/}
            {/*<Run></Run>*/}
            <div className="content">
                <h2 className="runsTitle">Runs</h2>
                <RunList />
            </div>
        </div>
    );
};

export default Main;