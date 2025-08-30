import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, CheckCircle } from 'lucide-react';

interface SuccessScreenProps {
  discountCode: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ discountCode }) => {
  const [copied, setCopied] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'KuEats Survey',
        text: 'I just completed the KuEats survey and got a 5% discount! You should try it too!',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = 'I just completed the KuEats survey and got a 5% discount! You should try it too!';
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    }
  };

  // Create confetti effect
  const confettiPieces = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: -20,
        rotate: 0,
        scale: 0
      }}
      animate={{ 
        y: window.innerHeight + 20,
        rotate: 360,
        scale: [0, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2,
        ease: "easeOut"
      }}
    />
  ));

  useEffect(() => {
    const timer = setTimeout(() => setConfettiVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="min-h-screen relative flex items-center justify-center p-4 pt-24 overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
      
      {confettiVisible && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {confettiPieces}
        </div>
      )}

      <motion.div
        className="text-center max-w-2xl relative z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🎉
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Thank You!
        </motion.h1>

        <motion.p
          className="text-xl text-white/95 mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          You've successfully unlocked your KuEats launch reward! 🥳
        </motion.p>

        {/* Voucher Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border-2 border-dashed border-orange-300 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
        >
          {/* Decorative elements */}
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
               Your KuEats Launch Discount Code
            </h3>
            
            <motion.div
              className="rounded-xl p-6 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-mono font-bold text-gray-800 tracking-wider mb-2">
                {discountCode}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 mx-auto text-[#831615] hover:text-[#642221] font-medium"
              >
                {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </motion.div>
            
            <p className="text-lg text-gray-900 font-medium">
              <span className="text-2xl font-bold text-[#831615]">10% OFF</span> your first order
            </p>
            <p className="text-sm text-gray-900 mt-2">
              Show this code at launch to claim your discount! 🍔
            </p>
          </div>
        </motion.div>

        {/* Share Button */}
        <motion.button
          onClick={handleShare}
          className="bg-white text-[#831615] hover:bg-[#831615] hover:text-white text-lg font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 mx-auto border-2 border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 />
          Tell friends to grab their discount too!
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default SuccessScreen;