import { FaBullseye, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Mission */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaBullseye size={40} className="text-blue-600 mb-4" />
            <h4 className="text-2xl font-semibold text-blue-600">Our Mission</h4>
            <p className="mt-2 text-gray-600">
              To provide a comprehensive, AI-powered healthcare ecosystem that bridges the gap between advanced technology and accessible healthcare, ensuring the highest quality of medical care for all.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaEye size={40} className="text-blue-600 mb-4" />
            <h4 className="text-2xl font-semibold text-blue-600">Our Vision</h4>
            <p className="mt-2 text-gray-600">
              To create a future where healthcare is universally accessible, highly efficient, and deeply personalized, empowered by the limitless possibilities of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;