import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <React.Suspense fallback={
      <div className="h-screen w-screen flex items-center justify-center bg-[#181818]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#8B5CF6]"></div>
      </div>
    }>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;