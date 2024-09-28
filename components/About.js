// components/About.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-blue-600">About Swaasth.ai</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Swaasth.ai, we blend traditional healthcare values with cutting-edge artificial intelligence to deliver comprehensive solutions for doctors, patients, and healthcare providers across India. Our mission is to make high-quality medical care accessible, efficient, and personalized for everyone, everywhere.
          </p>
        </motion.div>

        {/* Features with Icons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center text-center max-w-sm">
            <Image src={'/images/feature1.png' alt="Feature 1" width={100} height={100} className="mb-4" />
            <h4 className="text-xl font-semibold text-blue-600">Innovative AI Solutions</h4>
            <p className="mt-2 text-gray-600">
              Leveraging artificial intelligence to provide data-driven insights and personalized healthcare solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-sm">
            <Image src={'/images/feature2.png' alt="Feature 2" width={100} height={100} className="mb-4" />
            <h4 className="text-xl font-semibold text-blue-600">Comprehensive Care</h4>
            <p className="mt-2 text-gray-600">
              Offering a one-stop platform that integrates diagnostics, treatment, and follow-up care for seamless healthcare experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-sm">
            <Image src='/images/feature3.png' alt="Feature 3" width={100} height={100} className="mb-4" />
            <h4 className="text-xl font-semibold text-blue-600">Accessible Anywhere</h4>
            <p className="mt-2 text-gray-600">
              Extending quality healthcare services to remote and underserved regions through telehealth and mobile units.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;