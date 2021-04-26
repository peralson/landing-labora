// React
import React from 'react'

// Components
import Title from './Title'
import FeatureItem from './FeatureItem'

// Styles
import '../assets/styles/components/Features.scss'

// Img
import match from '../assets/img/match.png'
import trabajadores from '../assets/img/trabajadores.png'
import contratos from '../assets/img/contratos.png'
import pagos from '../assets/img/pagos.png'
import checkin from '../assets/img/checkin.png'
import seguridadSocial from '../assets/img/seguridad-social.png'

const Features = () => (
    <div className="features">
        <div className="features__container">
            <Title>Todo lo que hacías a mano:</Title>
            <Title>Automático, inmediato y fácil.</Title>
            <div className="all__features">
                <FeatureItem
                    title="Trabajadores"
                    desc="Unifica todas tus fuentes de personal en un solo lugar."
                    image={trabajadores}
                />
                <FeatureItem
                    title="Match"
                    desc="Solo los que mejor encajen aplican, tu eliges entre los que prefieras."
                    image={match}
                />
                <FeatureItem
                    title="Control de horas"
                    desc="Control horario geolocalizadeo a través de la app de trabajadores."
                    image={checkin}
                />
                <FeatureItem
                    title="Contratos y nóminas"
                    desc="Toda la documentación legal se genera automáticamente."
                    image={contratos}
                />
                <FeatureItem
                    title="Seguridad Social"
                    desc="Altas y bajas de la seguridad social automáticas."
                    image={seguridadSocial}
                />
                <FeatureItem
                    title="Pagos"
                    desc="Cada trabajador cobra en función de lo trabajado."
                    image={pagos}
                />
            </div>
        </div>
    </div>
)

export default Features