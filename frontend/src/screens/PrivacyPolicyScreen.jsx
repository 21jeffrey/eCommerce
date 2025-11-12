import React from 'react';

const PrivacyPolicyScreen = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
  <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">Privacy Policy</h1>
  <p className="mb-6 text-lg text-gray-700 text-center">
      Your privacy is important to us. This policy explains how Second Chance collects, uses, and protects your personal information when you use our website and services.
    </p>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600">Information We Collect</h2>
  <ul className="list-disc ml-6 mb-6 text-gray-600">
      <li>Contact details (name, email, phone number)</li>
      <li>Order and payment information</li>
      <li>Device and usage data (IP address, browser type)</li>
    </ul>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600">How We Use Your Information</h2>
  <ul className="list-disc ml-6 mb-6 text-gray-600">
      <li>To process orders and provide customer support</li>
      <li>To improve our products and services</li>
      <li>To communicate updates, offers, and news</li>
      <li>To comply with legal obligations</li>
    </ul>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600">Your Rights</h2>
  <ul className="list-disc ml-6 mb-6 text-gray-600">
      <li>Access, update, or delete your personal data</li>
      <li>Opt out of marketing communications</li>
      <li>Request information about our data practices</li>
    </ul>
    <div className="text-center mt-6">
      <p className="text-lg text-gray-700 mb-2">We never share your information with third parties except as required by law.</p>
      <p className="text-lg text-gray-700">For questions or requests, contact us at <a href="mailto:privacy@secondchance.co.ke" className="text-blue-600 font-semibold">privacy@secondchance.co.ke</a>.</p>
    </div>
  </div>
);

export default PrivacyPolicyScreen;
