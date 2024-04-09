import React from 'react';

function FeatureCard({ feature }) {
  return (
    <div className="border border-gray-300 rounded shadow-lg p-4 m-2">
      <h3 className="text-lg font-bold">{feature.title}</h3>
      <p className="text-sm"><b>Magnitude:</b> {feature.magnitude}</p>
      <p className="text-sm"><b>Place:</b> {feature.place}</p>
      <p className="text-sm"><b>Time:</b> {new Date(feature.time).toLocaleString()}</p>
      <p className="text-sm"><b>Type:</b> {feature.mag_type}</p>
      <p className="text-sm"><b>Tsunami:</b> {feature.tsunami ? 'Yes' : 'No'}</p>

      {/* Botones o enlaces para acciones adicionales */}
      <div className="flex justify-between mt-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Comentarios
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Añadir Comentario
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;