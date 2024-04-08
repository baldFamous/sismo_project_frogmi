import React, { useState, useEffect } from 'react';

function FeatureList() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/features')  // Asegúrate de usar la URL correcta de tu API
      .then(response => response.json())
      .then(data => setFeatures(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Feature List</h2>
      <ul>
        {features.map(feature => (
          <li key={feature.id}>{feature.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureList;