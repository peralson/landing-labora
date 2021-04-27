import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Header from '../components/Header'
import SmallTitle from '../components/SmallTitle'
import TextButton from '../components/TextButton'

// Styles
import '../assets/styles/NotFound.scss'
import image from '../assets/img/monstruito.png'

const NotFound = () => (
    <>
        <Header />
        <div className="NotFound">
            <img src={image} alt="Monstruito" className="NotFound__image" />
            <SmallTitle>Pues vaya...</SmallTitle>
            <p className="NotFound__text">No hemos podido entrontrar lo que buscas.</p>
            <Link to="/">
                <TextButton>Volver a Home</TextButton>
            </Link>
        </div>
    </>
)

export default NotFound