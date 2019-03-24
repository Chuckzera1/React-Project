import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem pageClass = "fa fa-home" pageLink = "/" pageLabel = "Home"/>
            <NavItem pageClass = "fa fa-users" pageLink="users"pageLabel = "Users"/>
        </nav>
    </aside>