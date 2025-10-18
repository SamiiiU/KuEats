import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'KuEats has been a game-changer! I can order food between classes and it arrives right at my hostel. No more missing meals due to long queues.',
      category: 'student'
    },
    {
      name: 'Rajesh Kumar',
      role: 'KuEats Rider',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Being a KuEats rider has helped me earn extra income while studying. The flexible hours work perfectly with my class schedule.',
      category: 'rider'
    },
    {
      name: 'Sunita Devi',
      role: 'Canteen Owner',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Since joining KuEats, our daily orders have increased by 60%. The dashboard makes it so easy to manage everything from one place.',
      category: 'canteen'
    },
    {
      name: 'Amit Patel',
      role: 'Engineering Student',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The app is super user-friendly and delivery is always on time. KuEats has made campus life so much more convenient!',
      category: 'student'
    },
    {
      name: 'Meera Singh',
      role: 'KuEats Rider',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I love being part of the KuEats community. The support team is amazing and I feel valued as a rider partner.',
      category: 'rider'
    },
    {
      name: 'Ravi Gupta',
      role: 'Canteen Manager',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'KuEats analytics help us understand what students want. We\'ve optimized our menu based on the insights and sales have grown significantly.',
      category: 'canteen'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'student': return 'from-blue-500 to-purple-500';
      case 'rider': return 'from-green-500 to-teal-500';
      case 'canteen': return 'from-[#831615] to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'student': return '🎓';
      case 'rider': return '🚲';
      case 'canteen': return '🏪';
      default: return '⭐';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-[#831615] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">💬</div>
        <div className="absolute top-40 right-20 text-7xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-8xl">👥</div>
        <div className="absolute bottom-40 right-10 text-6xl">❤️</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-yellow-400">Community</span> Says
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied students, riders, and canteen partners who are already part of the KuEats family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${getCategoryColor(testimonial.category)} text-white`}>
                <span>{getCategoryIcon(testimonial.category)}</span>
                <span className="capitalize">{testimonial.category}</span>
              </div>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-yellow-400 mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-gray-300 mb-8">Experience the future of campus dining today.</p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;