import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import Pagination from '../Pagination';
import {getFeatures} from '../services/api';

function FeatureList(){
    const [features, setFeatures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getFeatures(1, 25)
          .then(data => {
            console.log("Datos recibidos:", data);
            setFeatures(data.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

        if (features.length === 0) {
        return <div>No se encontraron datos</div>;
        }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {Array.isArray(features) && features.map(feature => (
                <FeatureCard key={feature.id} feature={feature.attributes} />
            ))}
            </div>
            <Pagination currentPage={currentPage} onChange={setCurrentPage} />
        </div>
      );

}

export default FeatureList;
