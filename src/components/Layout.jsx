// React
import React from 'react'

// Components
import Footer from './Footer'

// Styles
import '../assets/styles/App.scss'

const Layout = ({ children }) => (
    <div className="App">
            {children}
        <Footer />
    </div>
)

export default Layout