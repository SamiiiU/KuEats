import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Utensils } from 'lucide-react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'KuEats App', href: 'https://ku-eats-user-app.vercel.app/login' },
    { name: 'Rider App', href: 'https://ku-eats-rider.vercel.app/' },
    { name: 'Canteen Dashboard', href: 'https://ku-eats-canteen-management.vercel.app/' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className=""
            whileHover={{ scale: 1.05 }}
          >
            <div className="  rounded-lg">
              <img src={logo} className="h-20 w-20 translate-y-2 " />
            </div>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={index < 3 ? '_blank' : '_self'}
                className={`font-medium transition-colors  ${
                  scrolled ? 'text-gray-700 hover:text-[#831615]' : 'text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}

            <Link
                to={"/Survey"}
                className={`font-medium transition-colors  ${
                  scrolled ? 'text-gray-700 hover:text-[#831615]' : 'text-white'
                }`}
              >
                Submit Review
              </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                target='_blank'
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#831615] font-medium rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;