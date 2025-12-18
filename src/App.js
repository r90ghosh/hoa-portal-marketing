import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Text Section ABOVE the image */}
      <div className="pt-16 px-6 md:px-16 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
        Welcome to HOA Portal
      </h1>
        <p className="text-xl md:text-2xl mb-2">Manage your community with ease.</p>
        <p className="mb-6 text-gray-700">
          A simple and intuitive way for homeowners to stay engaged and informed.
        </p>
        <button className="bg-indigo-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition">
          Start your 30 day FREE trial
        </button>
      </div>

      {/* Image BELOW the overlay */}
      <div className="px-6 md:px-16 mt-10 mb-16">
        <img
          src="/home_page_1.png"
          alt="HOA Portal dashboard preview"
          className="w-full rounded-xl shadow-lg object-contain"
        />
      </div>
    </div>
  );
}

export default App;
