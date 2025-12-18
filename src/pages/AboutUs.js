import React from 'react';
import { useNavigate } from 'react-router-dom';
import happyAbt from '../assets/happy_about.jpg';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-10 text-indigo-600 hover:underline">
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
            alt="Team working"
            className="w-full h-72 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg">
              HOA Portal is a dedicated team of designers, engineers, and community managers with one goal: to simplify HOA living for everyone. 
              With decades of combined experience in real estate, technology, and homeowner engagement, we understand the frustrations and 
              opportunities in HOA management — and we’re here to transform it.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What Drives Us</h2>
            <p className="text-gray-700 text-lg">
              We believe communities thrive when communication is transparent, tasks are automated, and every resident feels included. 
              That’s why HOA Portal delivers a feature-rich yet user-friendly platform that empowers HOAs and residents alike.
            </p>
          </div>
          <img
            src={happyAbt}
            alt="Values"
            className="w-full h-72 object-cover rounded-xl shadow-md"
          />
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            To build thriving communities by providing innovative digital solutions that connect homeowners, board members, and service providers — all under one secure and intuitive platform.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;