import React from 'react'

// Components
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

// SCSS
import '../assets/styles/App.scss'

const Home = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Features />
        </>
    )
}

export default Home