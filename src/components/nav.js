import React from 'react'
import {Link } from 'react-router'


export default class Nav extends React.Component {
    render() {
        return (
                <div id="navContainer">
                    <ul id="nav-bar">
                        <li><Link to='/'><i className="fa fa-home" aria-hidden="true"></i> HOME</Link></li>
                        <li><Link to='/gallery'><i className="fa fa-camera-retro" aria-hidden="true"></i> GALLERY</Link></li>
                    </ul>
                </div>)
    }
}