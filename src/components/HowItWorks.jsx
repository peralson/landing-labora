// React
import React from 'react'

// Components
import SmallTitle from './SmallTitle'
import Li from './Li'

// Styles
import '../assets/styles/components/HowItWorks.scss'
import side from '../assets/img/side-scroll.png'

const HowItWorks = () => (
    <div className="htw">
        <div className="htw__container">
            <div className="htw__side htw__left">
                <SmallTitle>Publica tus necesidades de personal.</SmallTitle>
                <ul>
                    <Li text="Sube tus mejores trabajadores extra a la plataforma." type="todo" />
                    <Li text="Solo los más adecuados aplicarán." type="todo" />
                    <Li text="Haz click y contrata." type="todo" />
                </ul>
                <div className="htw__side__image-container">
                    <img src={side} alt="Contrata en un click." />
                </div>
            </div>
            <div className="gap"></div>
            <div className="htw__side htw__right">
                <SmallTitle>Nosotros nos encargamos del resto.</SmallTitle>
                <ul>
                    <Li text="Alta y baja en la seguridad social." type="check" />
                    <Li text="Contratos y nóminas automatizados." type="check" />
                    <Li text="Registro de horas con varias opciones de checkin." type="check" />
                    <Li text="Gestión de pagos directos." type="check" />
                </ul>
            </div>
        </div>
    </div>
)

export default HowItWorks