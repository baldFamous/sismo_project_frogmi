import React from 'react';

function FeatureCard({ feature }) {
  return (
    <div className="border rounded p-4">
      <h3 className="text-xl font-bold">{feature.title}</h3>
      {/* Otros detalles del feature */}
      {/* Botones para ver y añadir comentarios */}
    </div>
  );
}

export default FeatureCard;