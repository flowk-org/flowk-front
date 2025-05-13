import React from 'react';
import './PaginationControls.css';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => {
    return (
        <div className="pagination-controls">
            <span className="pagination-text">
                Page {currentPage} / {totalPages}
            </span>
            <div
                onClick={onPrev}
                className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
            >
                <FaChevronLeft />
            </div>
            <div
                onClick={onNext}
                className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
            >
                <FaChevronRight />
            </div>
        </div>
    );
};

export default PaginationControls;
