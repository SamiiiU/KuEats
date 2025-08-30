import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { SolutionValidation as SolutionValidationType } from '../../../types/survey';

interface SolutionValidationProps {
  onSubmit: (data: SolutionValidationType) => void;
}

const SolutionValidation: React.FC<SolutionValidationProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SolutionValidationType>({
    wouldUse: '',
    preferredOption: '',
    extraPayment: ''
  });

  const usageOptions = ['Definitely!', 'Probably', 'Maybe', 'Unlikely'];
  const preferredOptions = ['Pre-order pickup', 'Direct delivery', 'Both options'];
  const paymentOptions = ['Rs 0 (same price)', 'Rs 50-80 extra', 'Rs 80-100 extra', 'Rs 100+ extra'];

  const isValid = formData.wouldUse && formData.preferredOption && formData.extraPayment;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(formData);
    }
  };

  return (
    <motion.section
      className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-hidden"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,  }}
      exit={{ opacity: 0,  }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative z-10 border border-white/20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <Lightbulb className="mx-auto mb-4 text-[#831615]" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">The KuEats Solution</h2>
          <p className="text-gray-600">What do you think about our food delivery idea? </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q8: Would you use KuEats for food delivery? 
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {usageOptions.map((option) => (
                <motion.label
                  key={option}
                  className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.wouldUse === option
                    ? 'bg-[#831615] text-white'
                    : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="wouldUse"
                    value={option}
                    checked={formData.wouldUse === option}
                    onChange={(e) => setFormData({ ...formData, wouldUse: e.target.value })}
                    className="sr-only"
                    required
                  />
                  <span className="font-medium text-center">{option}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q9: Which option do you prefer?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {preferredOptions.map((option) => (
                <motion.label
                  key={option}
                  className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.preferredOption === option
                    ? 'bg-[#831615] text-white'
                    : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="preferredOption"
                    value={option}
                    checked={formData.preferredOption === option}
                    onChange={(e) => setFormData({ ...formData, preferredOption: e.target.value })}
                    className="sr-only"
                    required
                  />
                  <span className="font-medium text-center">{option}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q10: How much extra would you pay for convenience?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {paymentOptions.map((option) => (
                <motion.label
                  key={option}
                  className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.extraPayment === option
                    ? 'bg-[#831615] text-white'
                    : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="extraPayment"
                    value={option}
                    checked={formData.extraPayment === option}
                    onChange={(e) => setFormData({ ...formData, extraPayment: e.target.value })}
                    className="sr-only"
                    required
                  />
                  <span className="font-medium text-center">{option}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

              
         <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              type="submit"
              disabled={!isValid}
              className={` text-xl font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto border-2 border-white/20 group ${isValid
                  ? 'bg-gradient-to-r from-[#831615] to-[#681311] text-white shadow-lg '
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              whileHover={isValid ? { scale: 1.05, y: -2 } : {}}
              whileTap={isValid ? { scale: 0.95 } : {}}
            >
              Continue 
              <ArrowRight className="animate-pulse group-hover:translate-x-3 transition-all"/>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default SolutionValidation;