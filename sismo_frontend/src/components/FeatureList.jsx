import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import Pagination from '../Pagination';
import FilterForm from './FilterForm';
import { getFeatures } from '../services/api';

function FeatureList() {
    const [features, setFeatures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getFeatures(currentPage, 25, filters);
                setFeatures(data.data);
                setTotalPages(Math.ceil(data.pagination.total / 25));
            } catch (error) {
                console.error('Error al cargar features:', error);
            }
        };

        loadData();
    }, [currentPage, filters]);

    const resetFilters = () => {
        setFilters([]);
        setCurrentPage(1);
    };

    if (features.length === 0) {
        return (
            <div>
                <FilterForm onFilterChange={setFilters} />
                <div>No se encontraron datos para los filtros aplicados.</div>
                <button onClick={resetFilters} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Limpiar Filtros</button>
            </div>
        );
    }

    return (
        <div>
            <FilterForm onFilterChange={setFilters} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {features.map(feature => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={setCurrentPage}
            />
        </div>
    );
}

export default FeatureList;
