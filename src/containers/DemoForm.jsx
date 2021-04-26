import React from 'react'

// Components
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

// SCSS
import '../assets/styles/App.scss'

const DemoForm = () => (
    <>
        <Header isDemo />
        <ContactForm />
    </>
)

export default DemoForm