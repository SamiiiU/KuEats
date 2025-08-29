import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle,  ArrowRight } from 'lucide-react';
import { ProblemValidation as ProblemValidationType } from '../types/survey';

interface ProblemValidationProps {
  onSubmit: (data: ProblemValidationType) => void;
}

const ProblemValidation: React.FC<ProblemValidationProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProblemValidationType>({
    foodFrequency: '',
    difficulties: '',
    struggles: []
  });

  const frequencies = ['Daily', '2-3 times a week', 'Weekly', 'Rarely'];
  const difficultyOptions = ['Yes, definitely', 'Sometimes', 'Not really'];
  const struggleOptions = [
    'Long queues at food courts',
    'Limited time between classes',
    'Distance to food areas',
    'Limited food options',
    'High prices',
    'Poor food quality'
  ];

  const isValid = formData.foodFrequency && formData.difficulties && formData.struggles.length > 0;

  const handleStruggleToggle = (struggle: string) => {
    setFormData(prev => ({
      ...prev,
      struggles: prev.struggles.includes(struggle)
        ? prev.struggles.filter(s => s !== struggle)
        : [...prev.struggles, struggle]
    }));
  };

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
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
          <AlertTriangle className="mx-auto mb-4 text-[#831615]" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Current Food Situation</h2>
          <p className="text-gray-900">Help us understand the challenges you face </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Q5: How often do you buy food on campus? 
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {frequencies.map((freq) => (
                <motion.label
                  key={freq}
                  className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.foodFrequency === freq
                      ? 'bg-[#831615] text-white'
                      : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="foodFrequency"
                    value={freq}
                    checked={formData.foodFrequency === freq}
                    onChange={(e) => setFormData({ ...formData, foodFrequency: e.target.value })}
                    className="sr-only"
                    required
                  />
                  <span className="font-medium">{freq}</span>
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
              Q6: Do you face difficulties due to distance/short breaks? 
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {difficultyOptions.map((option) => (
                <motion.label
                  key={option}
                  className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.difficulties === option
                      ? 'bg-[#831615] text-white'
                      : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="difficulties"
                    value={option}
                    checked={formData.difficulties === option}
                    onChange={(e) => setFormData({ ...formData, difficulties: e.target.value })}
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
              Q7: What are your biggest struggles? (Select all that apply) 
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {struggleOptions.map((struggle) => (
                <motion.label
                  key={struggle}
                  className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.struggles.includes(struggle)
                      ? 'bg-[#831615] text-white'
                      : ' text-[#831615] border-2 border-[#831615]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="checkbox"
                    checked={formData.struggles.includes(struggle)}
                    onChange={() => handleStruggleToggle(struggle)}
                    className="sr-only"
                  />
                  <span className="font-medium">{struggle}</span>
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

export default ProblemValidation;