import { FaRegHandshake, FaUserMd, FaProcedures, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegHandshake size={30} className="text-blue-600" />,
      title: "Sign Up",
      description: "Create an account for seamless access to our all-in-one healthcare platform.",
    },
    {
      icon: <FaUserMd size={30} className="text-blue-600" />,
      title: "Connect with Professionals",
      description: "Connect with top doctors and healthcare providers through our integrated network.",
    },
    {
      icon: <FaProcedures size={30} className="text-blue-600" />,
      title: "Personalized Care",
      description: "Receive tailored treatment plans powered by AI-driven insights and predictive analytics.",
    },
    {
      icon: <FaHeartbeat size={30} className="text-blue-600" />,
      title: "Continuous Support",
      description: "Benefit from ongoing care and support, ensuring your health and well-being are always prioritized.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-600">How Swaasth.ai Works</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                {step.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-600">{step.title}</h4>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;