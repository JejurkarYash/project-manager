import React from "react";

const ErrorModel = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-50 "></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-red-500 p-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700">{message}</p>
        </div>
        <div className="p-4 bg-gray-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModel;
