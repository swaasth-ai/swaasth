// components/Hero.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionizing Healthcare with AI-Powered Solutions
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Comprehensive, Intelligent, and Accessible Healthcare for All
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a href="#cta" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Join Us Today
            </a>
            <a href="#about" className="text-white px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src='images/hero-bg.jpg' // Use a relevant high-quality image
            alt="Healthcare Technology"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;