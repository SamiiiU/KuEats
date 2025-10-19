import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false, onClick }) => {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : '';

  const CardComponent = onClick ? motion.div : 'div';

  return (
    <CardComponent
      className={`${baseClasses} ${hoverClasses} ${className} transition-all duration-200`}
      onClick={onClick}
      whileHover={hover ? { y: -2 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
    >
      {children}
    </CardComponent>
  );
};

export default Card;