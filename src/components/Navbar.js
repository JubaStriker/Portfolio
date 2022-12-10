import React from 'react';
import Logo from '../assets/logo1.png'
import { FaBars, BaTimes } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '50px' }} />
            </div>
            {/* menu */}
            <div className='flex'>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* Hamburger */}
            <div>
                <FaBars />
            </div>
            {/* Mobile menu */}
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* social icons */}
            <div>

            </div>
        </div>
    );
};

export default Navbar;