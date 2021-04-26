import React from 'react'

// Components
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'

// SCSS
import '../assets/styles/App.scss'

const Home = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
        </>
    )
}

export default Home