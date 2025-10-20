import React from 'react';
import { motion } from 'framer-motion';
import { Store, BarChart3, Users, Settings, ArrowRight, TrendingUp } from 'lucide-react';

const CanteenManagement = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track orders, revenue, and popular items with detailed insights'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Build relationships with students and manage feedback effectively'
    },
    {
      icon: Settings,
      title: 'Easy Menu Control',
      description: 'Update prices, availability, and add new items instantly'
    }
  ];

  return (
    <section id="canteen" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="bg-[#831615]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8 text-[#831615]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Canteen Dashboard</h3>
                <p className="text-gray-600">Manage your business with ease</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#831615] to-[#6b1211] rounded-2xl p-4 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Today's Revenue</span>
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold mb-1">PKR 12,450</div>
                  <div className="text-sm opacity-80">↗ 23% from yesterday</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">89</div>
                    <div className="text-sm text-gray-600">Orders Today</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Popular Item</span>
                    <span className="text-[#831615] font-bold">🍔 Burger</span>
                  </div>
                  <div className="text-sm text-gray-600">45 orders today</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#831615]/10 p-3 rounded-2xl">
                <Store className="h-8 w-8 text-[#831615]" />
              </div>
              <span className="text-xl font-semibold text-[#831615]">Canteen Management</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Canteen Business With 
              <span className="block text-[#831615]">Smart Technology</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the KuEats network and reach more students than ever before. Our comprehensive 
              dashboard gives you everything you need to manage orders, track performance, and grow your business.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#831615]/10 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-[#831615]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href='https://ku-eats-canteen-management.vercel.app/'
              target='_blank'
              className="bg-[#831615] hover:bg-[#6b1211] w-fit text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Go To Canteen Management Dashboard
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CanteenManagement;