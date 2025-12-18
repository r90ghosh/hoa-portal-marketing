import React from 'react';
import { useNavigate } from 'react-router-dom';

function Demo() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative">
      {/* Return Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 bg-white text-black px-4 py-2 rounded shadow-md hover:bg-gray-200 transition"
      >
        ← Return to Homepage
      </button>

      {/* Demo iframe */}
      <iframe
        src="https://leafy-macaron-e377b5.netlify.app"
        title="HOA Portal Demo"
        className="w-full h-full border-none"
      ></iframe>
    </div>
  );
}

export default Demo;
