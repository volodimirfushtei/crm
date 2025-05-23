import React from 'react';

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function Toolbar({ children, action }: ToolbarProps) {
  return (
    <div className="flex items-center gap-7 py-8 px-10 bg-lime-100" style={{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
    }}>
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
}