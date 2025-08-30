import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Feedback as FeedbackType } from '../../../types/survey';

interface FeedbackProps {
  onSubmit: (data: FeedbackType) => void;
}

const Feedback: React.FC<FeedbackProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FeedbackType>({
    mostUsefulFeature: '',
    concerns: ''
  });

  const isValid = formData.mostUsefulFeature.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(formData);
    }
  };

  return (
    <motion.section
      className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-hidden"
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1,  }}
      exit={{ opacity: 0,  }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
      
      <motion.div
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative z-10 border border-white/20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <MessageSquare className="mx-auto mb-4 text-[#831615]" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Voice Matters</h2>
          <p className="text-gray-600">Share your thoughts to help us build the perfect KuEats! </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q13: What feature would make KuEats most useful for you? 
            </label>
            <textarea
              value={formData.mostUsefulFeature}
              onChange={(e) => setFormData({ ...formData, mostUsefulFeature: e.target.value })}
              placeholder="E.g., Real-time tracking, scheduled orders, group orders..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#831615] focus:outline-none transition-colors text-lg resize-none h-32"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q14: Do you have any concerns about using KuEats? 
            </label>
            <textarea
              value={formData.concerns}
              onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
              placeholder="Any worries, suggestions, or things we should consider... (Optional)"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#831615] focus:outline-none transition-colors text-lg resize-none h-32"
            />
          </motion.div>

          <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              type="submit"
              disabled={!isValid}
              className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
                isValid
                  ? 'bg-gradient-to-r from-[#831615] to-[#681311] text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={isValid ? { scale: 1.05, y: -2 } : {}}
              whileTap={isValid ? { scale: 0.95 } : {}}
            >
              Complete Survey 🎉
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Feedback;