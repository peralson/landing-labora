// React
import React from 'react'

// Styles
import '../assets/styles/components/PrimaryButton.scss'

const PrimaryButton = ({ children, onSelect }) => (
    <div className="primary" onClick={onSelect}>
        <p className="primaryText">{children}</p>
    </div>
)

export default PrimaryButton