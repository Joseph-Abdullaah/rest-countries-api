import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center">
      <div
        className="h-16 w-16 animate-spin rounded-full border-8 border-gray-200 border-t-slate-700"
        style={{
          borderTopColor: 'hsl(209, 23%, 22%)', // Using a style for the exact HSL color
        }}
      ></div>
    </div>
  );
};

export default Loader;
