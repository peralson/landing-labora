// React
import React from 'react'

// Styles
import '../assets/styles/components/SecondaryButton.scss'

const SecondaryButton = ({ children, onSelect }) => (
    <div className="secondary" onClick={onSelect}>
        <p className="secondaryText">{children}</p>
    </div>
)

export default SecondaryButton