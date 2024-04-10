import React from 'react';

function Pagination({ currentPage, totalPages, onChange }) {
    const pageNumbers = [];
    const maxPageNumberVisible = 10;
    let startPage = Math.max(1, currentPage - maxPageNumberVisible / 2);
    let endPage = Math.min(totalPages, startPage + maxPageNumberVisible - 1);
  
    // Ajusta el rango si la cantidad de páginas es menor que la cantidad máxima visible
    if (totalPages < maxPageNumberVisible) {
        startPage = 1;
        endPage = totalPages;
    }
  
    // Construye los números de página
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center my-4 space-x-1">
        {currentPage > 1 && (
            <button onClick={() => onChange(1)} className="pagination-button">1</button>
        )}
  
        {startPage > 1 && <span>...</span>}
  
        {pageNumbers.map(number => (
            <button
                key={number}
                onClick={() => onChange(number)}
                className={`pagination-button ${number === currentPage ? 'active' : ''}`}
            >
            {number}
            </button>
        ))}
  
        {endPage < totalPages && <span>...</span>}
  
        {currentPage < totalPages && (
            <button onClick={() => onChange(totalPages)} className="pagination-button">
                {totalPages}
            </button>
        )}
      </div>
    );
  }
  
  export default Pagination;
  