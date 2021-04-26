// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import PrimaryButton from './PrimaryButton'

// Styles
import '../assets/styles/components/Hero.scss'

const Hero = () => (
    <div className="hero">
        <div className="hero__container">
            <div className="hero__side hero__leftBottom">
                <h1>Contrataciones de corta duración, en un click.</h1>
                <h5>Gestiona de manera automatizada todo el proceso de contratación de personal para periodos inferiores a 5 días.</h5>
                <div className="hero__cta">
                    <PrimaryButton>
                        <Link to="/">Pedir una demo</Link>
                    </PrimaryButton>
                </div>
            </div>
            <div className="hero__side hero__rightTop">
                <div className="img"></div>
            </div>
        </div>
    </div>
)

export default Hero