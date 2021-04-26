// React
import React from 'react'

// Styles
import '../assets/styles/components/PrimaryButton.scss'

const PrimaryButton = ({ children, onSelect }) => (
    <div className="button" onClick={onSelect}>
        <p className="buttonText">{children}</p>
    </div>
)

export default PrimaryButton