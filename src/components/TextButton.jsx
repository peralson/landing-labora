// React
import React from 'react'

// Styles
import '../assets/styles/components/TextButton.scss'

const TextButton = ({ children, onSelect }) => (
    <div className="textButton" onClick={onSelect}>
        <p className="textButtonText">{children}</p>
    </div>
)

export default TextButton