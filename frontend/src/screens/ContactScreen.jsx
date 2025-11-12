import React from 'react';

const ContactScreen = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
  <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">Contact Us</h1>
  <p className="mb-6 text-lg text-gray-700 text-center">
      We’re here to help! Whether you have questions about our products, want to donate tech, or need support with your order, you can reach us through the following channels:
    </p>
  <ul className="list-disc ml-6 mb-6 text-gray-600">
      <li>Email: <a href="mailto:info@secondchance.co.ke" className="text-blue-600">info@secondchance.co.ke</a></li>
      <li>Phone: +254 700 123 456 (Mon-Fri, 9am-5pm)</li>
      <li>Visit us: Nairobi, Kenya (see map on our website)</li>
      <li>Contact form: Fill out the form below and our team will respond within 24 hours.</li>
    </ul>
  <h2 className="text-2xl font-semibold mb-3 text-blue-600">Contact Form</h2>
    <form className="mb-4 bg-blue-50 rounded-lg p-6 shadow">
      <input type="text" placeholder="Your Name" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <input type="email" placeholder="Your Email" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <textarea placeholder="Your Message" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 w-full">Send Message</button>
    </form>
    <div className="text-center mt-6">
      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow">We look forward to hearing from you and will do our best to assist you promptly.</span>
    </div>
  </div>
);

export default ContactScreen;
