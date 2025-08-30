import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GamifiedPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  emoji: string;
}

const GamifiedPopup: React.FC<GamifiedPopupProps> = ({ isVisible, onClose, title, message, emoji }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className="text-6xl mb-4">{emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{message}</p>
            <motion.button
              onClick={onClose}
              className="bg-gradient-to-r from-[#831615] to-[#6b1311] text-white px-6 py-2 rounded-full font-semibold hover:from-[#531a19] hover:to-[#831615] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GamifiedPopup;