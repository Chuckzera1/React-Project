import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default (props) => {
    return(
        <Link className={`${props.pageClass}`} to={`${props.pageLink}`}>{props.pageLabel}</Link>
    )

}