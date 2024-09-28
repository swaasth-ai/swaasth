import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4">Ready to Transform Your Healthcare Experience?</h3>
          <p className="mb-8">Join us in revolutionizing healthcare through intelligent, accessible, and comprehensive AI-driven solutions.</p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100">Get Started with Swaasth.ai</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;