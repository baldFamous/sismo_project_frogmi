import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import Pagination from '../Pagination';
import {getFeatures} from '../services/api';

function FeatureList(){
    const [features, setFeatures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
    const loadData = async () => {
        try {
            const data = await getFeatures(currentPage, 25);
            setFeatures(data.data);
            setTotalPages(Math.ceil(data.pagination.total / 25));
        } catch (error) {
            console.error('Error al cargar features:', error);
        }
    };

    loadData();
    }, [currentPage]);

    if (features.length === 0) {
        return <div>No se encontraron datos</div>;
        }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {Array.isArray(features) && features.map(feature => (
                <FeatureCard key={feature.id} feature={feature} />
            ))}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages} // Pasa el total de páginas
                onChange={(page) => {
                    setCurrentPage(page);
                }} // Función para cambiar la página
            />    
        </div>
      );

}

export default FeatureList;
