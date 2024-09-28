// components/Footer.js

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  // State to manage the email input and submission message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handler for form submission
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // TODO: Implement your subscription logic here
    // For example, send the email to your backend or an email marketing service

    // For demonstration, we'll just set a success message
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear the input field
  };

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-2">Contact Us</h4>
            <p>Email: contact@swaasth.ai</p>
            <p>Phone: +91-XXXXXXXXXX</p>
            <p>Address: [Your Company Address], India</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 text-center">
          <h4 className="text-white font-semibold mb-2">Subscribe to our Newsletter</h4>
          <form className="flex justify-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
              Subscribe
            </button>
          </form>
          {/* Display submission message */}
          {message && <p className="mt-2 text-green-400">{message}</p>}
        </div>

        {/* Legal Links */}
        <div className="mt-8 text-center text-gray-500">
          <Link href="#" className="hover:text-white mr-4">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;