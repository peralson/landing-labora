// React
import React, { useState } from 'react'

// Libs
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

// Components
import PrimaryButton from './PrimaryButton'
import SmallTitle from './SmallTitle'
import ErrorText from './ErrorText'
import SuccessText from './SuccessText'

// Styles
import '../assets/styles/components/Footer.scss'

const Footer = () => {
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
        <footer className="footer">
            <div className="container">
                <SmallTitle>¿Quieres saber más?</SmallTitle>
                <Formik
                    initialValues={{
                        name: '',
                        company: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, submitProps) => {
                        setLoading(true)

                        fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: encode({ "form-name": "KnowMore", ...values})
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
                            <div className="footer__form-content">
                            <input type="hidden" name="form-name" value="KnowMore" />
                                <div className="footer__form">
                                    <Field placeholder="Nombre" className="input name" name="name" />
                                    <Field placeholder="Empresa" className="input company" name="company" />
                                    <Field placeholder="Email" className="input email" name="email" type="email" />
                                    <PrimaryButton onSelect={submitForm}>{loading ? 'Enviando...' : 'Contactar'}</PrimaryButton>
                                </div>
                                {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
                                {errors.company && touched.company && <ErrorText>{errors.company}</ErrorText>}
                                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                                {success && <SuccessText>{success}</SuccessText>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </footer>
    )
}

export default Footer