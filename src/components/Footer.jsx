// React
import React, { useState } from 'react'

// Components
import PrimaryButton from './PrimaryButton'
import SmallTitle from './SmallTitle'
import ErrorText from './ErrorText'
import SuccessText from './SuccessText'

// Styles
import '../assets/styles/components/Footer.scss'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleInput = e => setEmail(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        setError(null)

        if (email === '') return setError('Introduce un correo válido')

        setLoading(true)
        // Send to firebase OR handle an email
        setTimeout(() => {
            setEmail('')
            setLoading(false)
            setSuccess('Ya lo hemos reecibido. Contactaremos contigo en menos de 48 horas.')
        }, 1200);
    }

    return (
        <footer className="footer">
            <div className="container">
                <SmallTitle>¿Quieres saber más?</SmallTitle>
                <form className="form">
                    <input
                        className="input"
                        placeholder="Déjanos tu correo electrónico"
                        value={email}
                        onChange={handleInput}
                    />
                    <PrimaryButton onSelect={handleSubmit}>{loading ? 'Enviando...' : 'Contactar'}</PrimaryButton>
                </form>
                {error && <ErrorText>{error}</ErrorText>}
                {success && <SuccessText>{success}</SuccessText>}
            </div>
        </footer>
    )
}

export default Footer