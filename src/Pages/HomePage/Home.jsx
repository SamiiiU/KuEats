import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <section className='h-screen relative flex flex-col items-center justify-center '>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#831615]/90 via-[#831615]/50 to-[#831615]/90" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className='z-20 bg-white/90 backdrop-blur-sm px-6 py-10 rounded-3xl min-w-[600px] text-center'>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1, ease: 'easeIn' }}
                    className="text-8xl mb-6 bg-[#831615] w-fit mx-auto rounded-2xl"
                >
                    <img src={logo} alt="" className='w-40' />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} 
                    className='text-3xl font-bold text-gray-900 my-7 '>Welcome To KuEats </motion.h1>
                <motion.p 
                initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                 className='text-3xl font-bold text-gray-900 mb-7 '>Our Side is currently under construction</motion.p>

                <Link to={"/Survey"}>
                <motion.button
                    className=" bg-[#831615] hover:bg-[#831615] z-20 text-white text-xl font-bold py-4 px-8 rounded-full  transition-all duration-300 flex justify-center items-center gap-3 mx-auto border-2 border-white/20 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >   
                
                    Submit Your Suggestions
                    <ArrowRight className="animate-pulse group-hover:translate-x-3 transition-all" />
                </motion.button>
                </Link>
            </motion.div>
        </section>
    )
}

export default Home
