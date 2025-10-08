import React from "react";

const Loader = () => (
  <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50">
    {/* Spinner */}
    <div className="w-20 h-20 border-4 border-t-4 border-t-purple-500 border-purple-300 rounded-full animate-spin"></div>
    
    {/* Loading text */}
    <p className="mt-4 text-white text-lg font-semibold animate-pulse">
      Loading...
    </p>
  </div>
);

export default Loader;
