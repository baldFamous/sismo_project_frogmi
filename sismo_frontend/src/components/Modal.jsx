import React from 'react';

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <button onClick={close} className="absolute top-2 right-2 text-lg font-bold">x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;