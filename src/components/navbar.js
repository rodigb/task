import React from 'react'
import './navbar.scss'
import { FaCog, FaUser} from 'react-icons/fa';
function navbar() {
  return (
    <nav className="navbar">
        <a href="/" className="site-title"><span className="highlight">LOGO</span></a>
        <ul className="navbar-list">

            <li>
                <a href="/balance">£44</a>
            </li>
            <li>
                <a href="/user"><FaUser/></a>
            </li>
            <li>
                <a href="/settings"><FaCog/> </a>
            </li>

        </ul>
    </nav>
  )
}

export default navbar