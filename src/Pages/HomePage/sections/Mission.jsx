import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Clock, Heart } from 'lucide-react';

const Mission  = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize campus dining by connecting students with their favorite meals through seamless technology.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a platform that serves students, supports local canteens, and creates opportunities for riders.'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more long queues or rushing between classes. Get your food delivered when and where you need it.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every feature is designed with students in mind, from budget-friendly options to quick delivery times.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The KuEats <span className="text-[#831615]">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're transforming how students experience campus dining. KuEats isn't just a food delivery app – 
            it's a comprehensive ecosystem that brings together the entire campus food community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-[#831615]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-[#831615]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-[#831615] rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl opacity-90">Happy Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Partner Canteens</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15min</div>
              <div className="text-xl opacity-90">Average Delivery</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;