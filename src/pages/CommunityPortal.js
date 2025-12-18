import React from 'react';
import { useNavigate } from 'react-router-dom';

function CommunityPortal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <button onClick={() => navigate('/')} className="mb-4 text-indigo-600 hover:underline">
        ← Back to Home
      </button>
      <h1 className="text-3xl font-bold mb-4 text-center">Community Portal</h1>
      <div className="w-full h-[80vh]">
        <iframe
          src="https://admirable-gelato-933e66.netlify.app"
          title="Community Portal"
          className="w-full h-full border rounded-lg shadow"
        />
      </div>
    </div>
  );
}

export default CommunityPortal;
