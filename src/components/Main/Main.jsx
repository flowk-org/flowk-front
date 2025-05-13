import React, { useState } from 'react';
import RunList from './RunList/RunList';
import { useRuns } from '../../hooks/useRuns';
import '../Main/Main.css';
import PaginationControls from "./PaginationControls/PaginationControls";

const ITEMS_PER_PAGE = 4;

const Main = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { runs, totalPages, isLoading, error } = useRuns(currentPage, ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    return (
        <div className="mainContainer">
            <div className="header">
                <div className="headerContent">
                    <div className="searchContainer">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="form-control searchInput"
                        />
                    </div>
                    <div className="avatarContainer">
                        <img src="https://via.placeholder.com/40" alt="Аватар" className="avatar" />
                    </div>
                </div>
            </div>
            <div className="content">
                <h2 className="runsTitle">Runs</h2>
                {isLoading && <div>Загрузка...</div>}
                {error && <div>{error}</div>}
                {!isLoading && !error && (
                    <>
                        <RunList runs={runs} />
                        {totalPages > 1 && (
                            <PaginationControls
                                currentPage={currentPage + 1}
                                totalPages={totalPages || 1}
                                onPrev={handlePrevPage}
                                onNext={handleNextPage}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Main;
