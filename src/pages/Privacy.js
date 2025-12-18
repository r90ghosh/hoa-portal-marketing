import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Activity, CreditCard } from 'react-feather';

function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 px-6 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-10 text-indigo-600 hover:underline">
          ← Back to Home
        </button>

        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">Privacy you can trust</h1>
            <p className="text-lg text-gray-600">
              We are committed to protecting your personal data and ensuring a safe community environment.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/privacy-policy-6110840-5001073.png"
            alt="Privacy Illustration"
            className="w-full max-h-72 object-contain"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="h-6 w-6 text-black" />
              <h2 className="text-xl font-semibold">Data Security</h2>
            </div>
            <p className="text-gray-600">
              Your information is protected with advanced encryption methods.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
            <Shield className="w-10 h-10 text-indigo-600 mb-4" />
              <h2 className="text-xl font-semibold">Access Control</h2>
            </div>
            <p className="text-gray-600">
              Set permissions to ensure only authorized users can access sensitive areas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Activity className="h-6 w-6 text-black" />
              <h2 className="text-xl font-semibold">Activity Monitoring</h2>
            </div>
            <p className="text-gray-600">
              Keep track of community interactions with real-time monitoring tools.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <CreditCard className="h-6 w-6 text-black" />
              <h2 className="text-xl font-semibold">Secure Payments</h2>
            </div>
            <p className="text-gray-600">
              Rest assured, all online transactions are safe and encrypted.
            </p>
          </div>
        </div>

        <p className="text-center text-2xl font-bold mt-20">
          Care you <span className="text-indigo-600">trust</span> from your HOA Portal
        </p>
      </div>
    </div>
  );
}

export default Privacy;