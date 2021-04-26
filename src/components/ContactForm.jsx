// React
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Libs
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

// Components
import PrimaryButton from './PrimaryButton'
import TextButton from './TextButton'
import Title from './Title'
import ErrorText from './ErrorText'
import SuccessText from './SuccessText'

// Styles
import '../assets/styles/components/ContactForm.scss'
import back from '../assets/img/back.png'

const ContactForm = () => {
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required('El nombre es obligatorio'),
        company: Yup.string()
            .required('La empresa es obligatoria'),
        email: Yup.string().email('Introduce un correo válido').required('El correo es obligatorio'),
    });

    return (
        <div className="contactForm">
            <div className="contactForm__container">
                <div className="contactForm__left">
                    <div>
                        <Title>El cliente manda</Title>
                        <h5 className="contactForm__desc">Será un placer conversar y mostrarte como nuestro producto puede hacer que tu vida sea más fácil.</h5>
                    </div>
                    <TextButton>
                        <Link to="/">
                            <img src={back} alt="Volver" />
                            Volver a Home
                        </Link>
                    </TextButton>
                </div>
                <div className="gap"></div>
                <div className="contactForm__right">
                    <Formik
                        initialValues={{
                            name: '',
                            company: '',
                            email: '',
                            phone: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, submitProps) => {
                            setLoading(true)

                            fetch("/", {
                                method: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                body: encode({ "form-name": "ContactForm", ...values})
                            })
                                .then(res => {
                                    if (!res.ok) return alert('Ha ocurrido un error: ' + res.status)
                                    setLoading(false)
                                    submitProps.resetForm()
                                    setSuccess('¡Gracias! nos pondremos en contacto contigo en menos de 48 horas.')
                                })
                                .catch(error => alert(error))
                        }}
                    >
                        {({ errors, touched, submitForm }) => (
                            <Form>
                                <input type="hidden" name="form-name" value="ContactForm" />
                                <div className="contactForm__form">
                                    <Field placeholder="Tu nombre" className="contactForm__form-input" name="name" />
                                    <Field placeholder="La empresa dónde trabajas" className="contactForm__form-input" name="company" />
                                    <Field placeholder="Tu correo de contacto" className="contactForm__form-input" name="email" type="email" />
                                    <Field placeholder="Teléfono de contacto (opcional)" className="contactForm__form-input" name="phone" />
                                </div>
                                <PrimaryButton onSelect={submitForm}>{loading ? 'Enviando...' : 'Contactar'}</PrimaryButton>
                                {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
                                {errors.company && touched.company && <ErrorText>{errors.company}</ErrorText>}
                                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                                {success && <SuccessText>{success}</SuccessText>}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactForm