import React from 'react'

// Styles
import '../assets/styles/components/Li.scss'
import todo from '../assets/img/to-do.png'
import check from '../assets/img/check.png'

const Li = ({ text, type }) => (
    <li className="li">
        <div className="li__container">
            <img
                className="li__image"
                src={type === 'todo' ? todo : check}
                alt={type === 'todo' ? 'To do' : 'Check mark'}
            />
            <p>{text}</p>
        </div>
    </li>
)

export default Li