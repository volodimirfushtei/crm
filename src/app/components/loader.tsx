import React from 'react';

export interface LoaderProps {
  status?: string;
  className?: string;
}


export default function Loader({}: LoaderProps) {

  return (

    <div className="flex flex-row gap-2">
      <div className="w-3 h-3 rounded-full bg-blue-200 animate-bounce"></div>
      <div className="w-3 h-3 rounded-full bg-blue-300 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce [animation-delay:-.5s]"></div>
    </div>);
}