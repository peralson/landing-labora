// React
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Layout from '../components/Layout'

// Screens
import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Workers from '../containers/Workers'
import NotFound from '../containers/NotFound'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                {/* Logs into App */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                {/* Main Containers */}
                <Route exact path="/" component={Home} />
                <Route exact path="/for-workers" component={Workers} />
                
                {/* Other routes */}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App
