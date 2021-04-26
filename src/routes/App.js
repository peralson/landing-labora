// React
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Screens
import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import DemoForm from '../containers/DemoForm'
import Workers from '../containers/Workers'
import NotFound from '../containers/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            {/* Logs into App */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            {/* Main Containers */}
            <Route exact path="/" component={Home} />
            <Route exact path="/demo" component={DemoForm} />
            <Route exact path="/for-workers" component={Workers} />
            
            {/* Other routes */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App
