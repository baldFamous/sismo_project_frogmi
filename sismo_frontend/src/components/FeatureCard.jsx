import React, { useState } from 'react';
import Modal from './Modal';
import CommentForm from './CommentForm';

function FeatureCard({ feature }) { 
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCommentsClick = () => {
     setModalOpen(true);
     };

// Helper function to create a Google Maps link
    const createMapLink = (lat, lng) => {
        return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    };

    return (
        
        <div className="max-w-md w-full lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden m-4">
        <div className="w-full p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{feature.attributes.title}</div>
            <p className="text-gray-700 text-base mb-2">
                <b>Magnitude:</b> {feature.attributes.magnitude}
            </p>
            <p className="text-gray-700 text-base mb-2">
                <b>Place:</b> {feature.attributes.place}
            </p>
            <p className="text-gray-700 text-base mb-2">
                <b>Time:</b> {new Date(feature.attributes.time).toLocaleString()}
            </p>
            <p className="text-gray-700 text-base mb-2">
                <b>Tsunami:</b> {feature.attributes.tsunami ? 'Yes' : 'No'}
            </p>
            <p className="text-gray-700 text-base mb-2">
                <b>Mag-Type:</b> {feature.attributes.mag_type}
            </p>
            <p className="text-gray-700 text-base">
                <b>Coordinates:</b> <a href={createMapLink(feature.attributes.coordinates.latitude, feature.attributes.coordinates.longitude)} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Open in Maps </a>
            </p>
            <p className="text-gray-700 text-base mb-2">
                <b>Link:</b> <a href={feature.links.external_url} rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Open EarthQuake </a>
            </p>
            
            </div>
            <div className="flex items-center">
            <div className="text-sm">
            <button onClick={handleCommentsClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Comentarios
            </button>
            
            </div>
            <Modal isOpen={isModalOpen} close={() => setModalOpen(false)}>
                <CommentForm featureId={feature.id} />
            </Modal>
            </div>
        </div>
        </div>
        
    );
}

export default FeatureCard;
