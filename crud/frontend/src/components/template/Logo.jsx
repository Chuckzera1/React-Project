import './Logo.css'
import kayn from '../../assets/images/images2.png'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className = "logo">
       <Link to="/" className="logo">
            <img src={kayn} alt="kayn" />
       </Link>
    </aside>