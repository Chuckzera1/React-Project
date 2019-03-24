import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Route from './Route'
import Footer from '../components/template/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Route />
            <Footer />
        </div>
    </HashRouter>