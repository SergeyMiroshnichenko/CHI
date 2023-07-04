
import React, {  useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    };
  
    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };
 export default Pagination  