import React from 'react'

// Styles
import '../assets/styles/components/FeatureItem.scss'

const FeatureItem = ({ title, desc, image }) => (
    <div className="feature-item__container">
        <img src={image} alt="Feature item" className="feature-item__image" />
        <h4 className="feature-item__title">{title}</h4>
        <p className="feature-item__desc">{desc}</p>
    </div>
)

export default FeatureItem