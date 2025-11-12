import React from 'react';

const AboutScreen = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
  <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">About Second Chance</h1>
  <p className="mb-6 text-lg text-gray-700 text-center">
      Second Chance is a platform dedicated to selling donated and used tech, giving electronics a new life and supporting sustainability. We believe in affordable access to technology and responsible recycling.
    </p>
  <p className="mb-6 text-lg text-gray-700 text-center">
      We partner with individuals, organizations, and businesses to collect, refurbish, and distribute electronics such as laptops, phones, and accessories. Every device we sell is carefully tested and restored to ensure quality and reliability for our customers.
    </p>
    <div className="mb-6">
      <p className="mb-2 text-lg text-gray-700 text-center">By choosing Second Chance, you help:</p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Reduce e-waste and its impact on the environment</li>
        <li>Support digital literacy and education initiatives</li>
        <li>Empower communities with affordable tech</li>
        <li>Promote responsible recycling and reuse</li>
      </ul>
    </div>
    <div className="text-center mt-6">
      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow">Join us in building a more sustainable and inclusive future. Whether you donate, buy, or spread the word, you are making a difference!</span>
    </div>
  </div>
);

export default AboutScreen;
