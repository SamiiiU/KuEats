import React from 'react'

import Navbar from '../../Components/Navbar'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import RiderOpportunities from './sections/RiderOppurtunities'
import CanteenManagement from './sections/CanteenManagement'
import Testimonials from './sections/Testimonals'
import Footer from '../../Components/Footer'
const Home = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Mission/>
        <RiderOpportunities/>
        <CanteenManagement/>
        <Testimonials/>
        <Footer/>

        
        </>
    )
}

export default Home
