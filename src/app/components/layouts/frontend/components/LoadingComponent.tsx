import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-bounce w-2.5 h-2.5 bg-red-600 rounded-full mx-1"></div>
      <div className="animate-bounce w-2.5 h-2.5 bg-red-600 rounded-full mx-1 delay-150"></div>
      <div className="animate-bounce w-2.5 h-2.5 bg-red-600 rounded-full mx-1 delay-300"></div>
    </div>
  );
};

export default LoadingComponent;
