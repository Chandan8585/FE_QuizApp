import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"
const Navbar = () => {
  return (
    <header className="heading d-flex grow-shrink-basis align-center">
    <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src={logo} alt="lightbul" />
        <h1 className="heading-title">
            <Link to="/" className='logo'>Quiz App</Link>
        </h1>
    </div>
    <nav className="navigation">
        <ul className="list-non-bullet">
            <li className="list-item-inline">
            
                <Link to="/" className="link cursor">Home</Link>
            </li>
            <li className="list-item-inline">
                <Link to="/" className="link cursor">About</Link>
            </li>
            <li className="list-item-inline">
                <Link to="/" className="link cursor">Contact</Link>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Navbar