import React from 'react';
import contactImage from '../../../assets/Banner/car1.jpg';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src={contactImage} alt="Contact" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-medium text-gray-800">Toy Shop</h2>
            <p className="text-gray-600">1234 Toy Street, City</p>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" id="name" className="w-full border-gray-300 border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" id="email" className="w-full border-gray-300 border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full border-gray-300 border rounded-md p-2" />
          </div>
          <button type="submit" className="py-2 px-4 bg-yellow-400 text-white text-lg font-medium rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
