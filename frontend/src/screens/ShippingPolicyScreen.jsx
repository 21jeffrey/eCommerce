import React from 'react';

const ShippingPolicyScreen = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">Shipping Policy</h1>
    <p className="mb-6 text-lg text-gray-700 text-center">
      Second Chance ships donated and refurbished tech products throughout Kenya. We strive to deliver your order quickly, safely, and affordably.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600 flex items-center"><svg className="h-6 w-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l4-4a1 1 0 011.414 0l4 4M7 5v14m10-10l-4 4a1 1 0 01-1.414 0l-4-4m8 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" /></svg>Order Processing</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Orders are processed within <span className="font-bold">2 business days</span> after payment confirmation.</li>
          <li>You will receive a confirmation email with tracking details once your order is shipped.</li>
        </ul>
      </div>
      <div>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600 flex items-center"><svg className="h-6 w-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" /></svg>Shipping & Delivery</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Standard delivery time is <span className="font-bold">5-7 business days</span>.</li>
          <li>Shipping fees are calculated at checkout based on location and package size.</li>
          <li>We use trusted courier partners for safe and reliable delivery.</li>
        </ul>
      </div>
    </div>
    <div className="bg-blue-50 rounded-lg p-6 mb-8">
  <h2 className="text-2xl font-semibold mb-3 text-blue-600 flex items-center"><svg className="h-6 w-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" /></svg>Support & Returns</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>If your package is delayed or lost, contact our support team for assistance.</li>
        <li>Returns are accepted within <span className="font-bold">14 days</span> for eligible products. See our returns policy for details.</li>
      </ul>
    </div>
    <div className="text-center">
      <p className="text-lg text-gray-700 mb-2">For shipping questions, email <a href="mailto:support@secondchance.co.ke" className="text-blue-600 font-semibold">support@secondchance.co.ke</a> or call our helpline.</p>
      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow">Fast, Reliable & Secure Delivery</span>
    </div>
  </div>
);

export default ShippingPolicyScreen;
