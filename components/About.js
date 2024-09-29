// components/About.js

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Innovative AI Solutions',
    description:
      'Leveraging artificial intelligence to provide data-driven insights and personalized healthcare solutions.',
    imageSrc: '/images/feature1.png',
    altText: 'Innovative AI Solutions Icon',
  },
  {
    title: 'Comprehensive Care',
    description:
      'Offering a one-stop platform that integrates diagnostics, treatment, and follow-up care for a seamless healthcare experience.',
    imageSrc: '/images/feature2.png',
    altText: 'Comprehensive Care Icon',
  },
  {
    title: 'Accessible Anywhere',
    description:
      'Extending quality healthcare services to remote and underserved regions through telehealth and mobile units.',
    imageSrc: '/images/feature3.png',
    altText: 'Accessible Anywhere Icon',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-blue-600">About Swaasth.ai</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Swaasth.ai, we blend traditional healthcare values with cutting-edge artificial
            intelligence to deliver comprehensive solutions for doctors, patients, and healthcare
            providers across India. Our mission is to make high-quality medical care accessible,
            efficient, and personalized for everyone, everywhere.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.altText}
                width={100}
                height={100}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-600">{feature.title}</h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
