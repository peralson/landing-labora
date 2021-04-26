import React from 'react'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

// SCSS
import '../assets/styles/App.scss'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <Features />
            <Footer />
        </>
    )
}

export default Home