import { FaStethoscope, FaChartLine, FaUniversalAccess, FaUsersCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FaStethoscope size={30} className="text-blue-600" />,
      title: "Integrated Healthcare Services",
      description: "A unified platform connecting patients, doctors, and healthcare providers for seamless medical care, including telemedicine and comprehensive treatment plans.",
    },
    {
      icon: <FaChartLine size={30} className="text-blue-600" />,
      title: "Advanced Data Analytics",
      description: "AI-powered insights and predictive analytics to inform decision-making and personalize treatment plans.",
    },
    {
      icon: <FaUniversalAccess size={30} className="text-blue-600" />,
      title: "Accessibility & Inclusivity",
      description: "Extending quality healthcare to remote and underserved regions through telehealth and multilingual support.",
    },
    {
      icon: <FaUsersCog size={30} className="text-blue-600" />,
      title: "Empowering Healthcare Professionals",
      description: "Streamlining administrative tasks and providing continuous learning resources to enhance medical practice.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-600">Our Solutions</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity:0, y: 50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-600">{service.title}</h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;