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
                <button onClick={() => onChange(1)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                1
                </button>
            )}
        
            {startPage > 1 && <span>...</span>}
        
            {pageNumbers.map(number => (
                <button
                key={number}
                onClick={() => onChange(number)}
                className={`px-4 py-2 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-400'}`}
                >
                {number}
                </button>
            ))}
        
            {endPage < totalPages && <span>...</span>}
        
            {currentPage < totalPages && (
                <button onClick={() => onChange(totalPages)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                {totalPages}
                </button>
            )}
        </div>
        );
  }
  
  export default Pagination;
  