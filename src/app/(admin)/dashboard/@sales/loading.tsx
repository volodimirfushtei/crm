import React from 'react';

export interface LoadingProps {
}

function Loading({}: LoadingProps) {
  return (
    <div className="flex justify-center items-center h-full ">
      <div
        className="w-12 h-12  border-4 border-red-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
}

export default Loading;
