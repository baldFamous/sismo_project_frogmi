import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import Pagination from '../Pagination';
import { getFeatures, sendComment, getComments } from '../services/api';

function FeatureList() {
  const [features, setFeatures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Llamada a la API para obtener features
    getFeatures(currentPage).then(data => setFeatures(data));
    }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <Pagination currentPage={currentPage} onChange={setCurrentPage} />
    </div>
  );
}

export default FeatureList;