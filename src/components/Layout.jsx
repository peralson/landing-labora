// React
import React from 'react'

// Components
import Footer from './Footer'
import Header from './Header'

// Styles
import '../assets/styles/App.scss'

const Layout = ({ children }) => (
    <div className="App">
        <Header />
            {children}
        <Footer />
    </div>
)

export default Layout