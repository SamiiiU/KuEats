import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { StudentInfo as StudentInfoType } from '../../../types/survey';

interface StudentInfoProps {
  onSubmit: (data: StudentInfoType) => void;
}

const departments = [
  'Computer Science', 'Engineering', 'Business', 'Medicine', 'Law', 
  'Arts & Social Sciences', 'Sciences', 'Architecture', 'Education', 'Other'
];

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+'];

const StudentInfo: React.FC<StudentInfoProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<StudentInfoType>({
    fullName : '',
    department: '',
    year: '',
    residence: ''
  });

  const isValid = formData.department && formData.year && formData.residence;

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
      animate={{ opacity: 1,}}
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
      
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative z-10 border border-white/20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-8 ">
          <GraduationCap className="mx-auto mb-4 text-[#831615]" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Tell us about yourself!</h2>
          <p className="text-gray-600">Let's get to know our future KuEats family member </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Q1: What is Your Full Name 
            </label>
            <input type="text"  
            value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#831615] focus:outline-none transition-colors text-lg"
              required/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Q2: What's your Department/Faculty? 
            </label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#831615] focus:outline-none transition-colors text-lg"
              required
            >
              <option value="">Select your department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Q3: What year are you in? 📖
            </label>
            <select
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#831615] focus:outline-none transition-colors text-lg"
              required
            >
              <option value="">Select your year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Q4: Where do you live? 🏠
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Hostel', 'Day Scholar'].map((option) => (
                <motion.label
                  key={option}
                  className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.residence === option
                      ? 'bg-[#831615] text-white'
                      : 'bg-white text-[#831615] border-2 border-[#831615]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="residence"
                    value={option}
                    checked={formData.residence === option}
                    onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
                    className="sr-only"
                    required
                  />
                  <span className="text-lg font-medium">{option}</span>
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
              Next Step
              <ArrowRight className="animate-pulse group-hover:translate-x-3 transition-all"/>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default StudentInfo;