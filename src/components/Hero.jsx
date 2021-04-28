// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import PrimaryButton from './PrimaryButton'
import Title from './Title'

// Styles
import '../assets/styles/components/Hero.scss'
import dashboard from '../assets/img/hero-bg-dos.png'

const Hero = () => (
    <div className="hero">
        <div className="hero__container">
            <div className="hero__side hero__leftBottom">
                <Title>Contrata a tu personal de corta duración en un click.</Title>
                <h5>Gestiona de manera automatizada todo el proceso de contratación de personal para periodos inferiores a 5 días.</h5>
                <div className="hero__cta">
                    <Link to="/demo">
                        <PrimaryButton>Pedir una demo</PrimaryButton>
                    </Link>
                </div>
            </div>
            <div className="hero__side hero__rightTop">
                <img className="img" src={dashboard} alt="Dashboard" />
            </div>
        </div>
    </div>
)

export default Hero