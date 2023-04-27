import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out"
          onClick={handleBackdropClick}
        >
          <div
            className={`bg-white rounded shadow-lg w-full max-w-5xl transition-transform duration-300 ease-in-out ${
              isOpen
                ? "transform-none scale-100 opacity-100"
                : "transform scale-95 opacity-0"
            } lg:transform-none lg:scale-100 lg:opacity-100`}
          >
            <button
              className="absolute top-2 right-2 focus:outline-none"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
