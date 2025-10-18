import React from 'react';
import { motion } from 'framer-motion';
import { Bike, DollarSign, Clock, Star, ArrowRight } from 'lucide-react';

const RiderOpportunities = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn While You Study',
      description: 'Flexible income that fits around your class schedule'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you want, as much as you want'
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Earn ratings and unlock premium delivery opportunities'
    }
  ];

  return (
    <section id="rider" className="py-20 bg-gradient-to-br from-[#831615] to-[#6b1211] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🚲</div>
        <div className="absolute top-40 right-20 text-6xl">💰</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">⭐</div>
        <div className="absolute bottom-40 right-10 text-5xl">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Bike className="h-8 w-8" />
              </div>
              <span className="text-xl font-semibold">Rider Opportunities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turn Your Campus Knowledge Into 
              <span className="block text-yellow-400">Extra Income</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our growing community of student riders. Earn money while helping fellow students 
              get their favorite meals delivered quickly and safely across campus.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-white text-[#831615] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Rider
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🚲</div>
                <h3 className="text-2xl font-bold mb-2">Rider Dashboard</h3>
                <p className="text-white/80">Track your earnings and deliveries</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Today's Earnings</span>
                    <span className="text-2xl font-bold text-yellow-400">₹450</span>
                  </div>
                  <div className="text-sm text-white/70">12 deliveries completed</div>
                </div>
                
                <div className="bg-white/20 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70">Based on 156 reviews</div>
                </div>
                
                <div className="bg-white/20 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Next Delivery</span>
                    <span className="text-green-400 font-bold">Ready</span>
                  </div>
                  <div className="text-sm text-white/70">BS Canteen → Hostel Block 3</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderOpportunities;