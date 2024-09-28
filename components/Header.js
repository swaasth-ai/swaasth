// components/Header.js

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Swaasth.ai</h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-600">Home</Link>
          <Link href="#about" className="hover:text-blue-600">About</Link>
          <Link href="#services" className="hover:text-blue-600">Services</Link>
          <Link href="#how-it-works" className="hover:text-blue-600">How It Works</Link>
          <Link href="#testimonials" className="hover:text-blue-600">Testimonials</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link href="#cta" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get Started
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="#home" className="hover:text-blue-600" onClick={handleNav}>Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600" onClick={handleNav}>About</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600" onClick={handleNav}>Services</Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-blue-600" onClick={handleNav}>How It Works</Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-blue-600" onClick={handleNav}>Testimonials</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600" onClick={handleNav}>Contact</Link>
            </li>
            <li>
              <Link href="#cta" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleNav}>Get Started</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;