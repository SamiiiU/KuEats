import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" /> */}
      
      <motion.div
        className="text-center max-w-2xl relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-10 text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.01, 1 , 1.01 ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🍔🚲
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold  mb-4 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hey KU Student!
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl font-semibold  mb-6 drop-shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Help us build KuEats 
        </motion.h2>
        
        <motion.p
          className="text-xl  mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Complete this survey and unlock <span className="font-bold text-[#831615]  px-2 py-1 rounded-full">10% discount</span> on your first KuEats order!
        </motion.p>
        
        <motion.button
          onClick={onStart}
          className="bg-white text-[#831615] hover:bg-[#831615] hover:text-white text-xl font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto border-2 border-white/20 group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Survey
          <ArrowRight className="animate-pulse group-hover:translate-x-3 transition-all" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WelcomeScreen;