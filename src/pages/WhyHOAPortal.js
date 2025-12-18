import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardImg from '../assets/dashboard_blog.jpg';
import commImg from '../assets/communications_blog.jpg';
import payImg from '../assets/payments_blog.jpg';
import tennisImg from '../assets/tennis_blog.jpg';

function WhyHOAPortal() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'All-In-One Dashboard',
      text: 'Manage tasks, events, and finances from one central hub.',
      image: dashboardImg,
    },
    {
      title: 'Easy Communication',
      text: 'Keep residents informed and involved with our integrated messaging tools.',
      image: commImg,
    },
    {
      title: 'Simplified Payments',
      text: 'Enable hassle-free online payments for dues and fees.',
      image: payImg,
    },
    {
      title: 'Smart Reservations',
      text: 'Reserve amenities in seconds with real-time availability and approvals.',
      image: tennisImg,
    },
  ];

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-10 text-indigo-600 hover:underline">
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-center mb-16">Why Choose HOA Portal?</h1>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-700 text-lg">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyHOAPortal;
