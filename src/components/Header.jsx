// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import logo from '../assets/img/logo-dark.png'
import PrimaryButton from './PrimaryButton'

// Styles
import '../assets/styles/components/Header.scss'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__img" src={logo} alt="Platzi Video" />
                </Link>
                <div className="header__menu">
                    {/* <div className="header__menu__link">
                        <Link to="/for-workers">¿Eres trabajador?</Link>
                    </div> */}
                    <PrimaryButton>
                        <Link to="/">Pedir una demo</Link>
                    </PrimaryButton>
                </div>
            </div>
        </header>
    )
}

export default Header