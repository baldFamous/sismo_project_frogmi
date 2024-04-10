import React from 'react';

function FeatureCard({ feature }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{feature.title}</div>
          <p className="text-gray-700 text-base mb-4">
            <b>Magnitude:</b> {feature.magnitude}
          </p>
          <p className="text-gray-700 text-base mb-4">
            <b>Place:</b> {feature.place}
          </p>
          <p className="text-gray-700 text-base mb-4">
            <b>Time:</b> {new Date(feature.time).toLocaleString()}
          </p>
          <p className="text-gray-700 text-base mb-4">
            <b>Type:</b> {feature.mag_type}
          </p>
          <p className="text-gray-700 text-base">
            <b>Tsunami:</b> {feature.tsunami ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Ver Comentarios
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Añadir Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;