// src/pages/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingData = [
    { range: '0–30 Units', monthly: 49, yearly: 49 * 12 * 0.8 },
    { range: '30–100 Units', monthly: 99, yearly: 99 * 12 * 0.8 },
    { range: '100–300 Units', monthly: 199, yearly: 199 * 12 * 0.8 },
    { range: '300–500 Units', monthly: 299, yearly: 299 * 12 * 0.8 },
    { range: '500+ Units', monthly: 399, yearly: 399 * 12 * 0.8 },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-20">
      {/* Card Header */}
      <div className="bg-indigo-700 shadow-lg rounded-xl p-6 md:p-10 max-w-3xl mx-auto mb-12 border border-indigo-100">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">Pricing Plans</h1>

        {/* Billing Toggle Card */}
        <div className="bg-indigo-800 rounded-lg p-4 max-w-md mx-auto mb-6 shadow-sm">
          <div className="flex justify-center items-center space-x-4">
            <span
              className={`cursor-pointer ${
                billingCycle === 'monthly' ? 'font-bold text-white' : 'text-white'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </span>

            {/* Toggle Button */}
            <button
              className="w-14 h-8 bg-gray-300 rounded-full p-1 flex items-center"
              onClick={() =>
                setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
              }
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : ''
                }`}
              />
            </button>

            <span
              className={`cursor-pointer ${
                billingCycle === 'yearly' ? 'font-bold text-white' : 'text-white'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-sm text-green-600">(20% off)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border shadow-md rounded-xl max-w-5xl mx-auto">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6">Units</th>
              <th className="py-3 px-6">
                {billingCycle === 'monthly' ? 'Monthly Price' : 'Yearly Price'}
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-indigo-50 transition">
                <td className="py-4 px-6">{row.range}</td>
                <td className="py-4 px-6">
                  ${billingCycle === 'monthly' ? row.monthly : row.yearly.toFixed(0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300">
          Start Your 30 Day Free Trial
        </button>
      </div>
    </div>
  );
};

export default Pricing;
