import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <button className="navbar-button">Daily Giving</button>
                <button className="navbar-button">❤️ Donate</button>

            </div>
            <div className="navbar-center">
                <div className="navbar__organization">
                    <div className="navbar__title">DOCTORS HUMANITARIAN AID CHARITY</div>
                    <div className="navbar__title navbar__title--larger">ORGANISATION</div>
                    <div className="navbar__title--smaller">D H A C O</div>
                </div>
            </div>
            <div className="navbar-right">
                <button className="navbar-button">ABOUT US</button>
                <FaFacebookF className='navbar-button' />
                <BsTwitter className='navbar-button' />
                <BsInstagram className='navbar-button' />
            </div>
        </div>
    )
}

export default NavBar;
