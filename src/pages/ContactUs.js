import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact us</h1>
          <p className="text-lg text-gray-700">
            Need to get in touch with us? Please fill out the form with your inquiry.
          </p>
          <p className="text-lg text-red-700">
            AMG Corp Subsidiary.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 w-full">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name*</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">What can we help you with?</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"></textarea>
            </div>

            <div>
              <button type="submit" className="w-full bg-purple-700 text-white font-semibold py-2 rounded hover:bg-purple-800 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Return Button */}
      <div className="mt-12">
        <button onClick={() => navigate('/')} className="text-purple-600 underline text-sm">
          ← Return to Homepage
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
