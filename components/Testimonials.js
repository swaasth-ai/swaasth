import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Swaasth.ai has transformed the way I manage my patients. The AI-driven insights are invaluable.",
      author: "Dr. Ananya Sharma, General Practitioner",
      image: './images/dr-ananya.jpg', // Add testimonial images in public/images/
    },
    {
      quote: "Access to quality healthcare from the comfort of my home has never been easier. Thank you, Swaasth.ai!",
      author: "Rajiv Kumar, Patient",
      image: './images/rajiv-kumar.jpg',
    },
    {
      quote: "The platform streamlines my administrative tasks, allowing me to focus more on patient care.",
      author: "Dr. Priya Gupta, Specialist",
      image: './images/dr-priya.jpg',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-600">What Our Users Say</h3>
        </motion.div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 md:mb-0 md:mr-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={100}
                  height={100}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="mt-2 text-blue-600 font-semibold">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;