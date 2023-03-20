import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import JH from '../assets/JH.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full z-30 top-0 h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-lg'>
            <div>
                <Link to='home' smooth={true} duration={500}>
                    <img src={JH} alt='Logo' style={{ width: '90px' }} />
                </Link>

            </div>

            {/* menu */}
            <ul className='hidden md:flex gap-2'>
                <li className='font-bold hover:text-pink-600 duration-75'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='font-bold hover:text-pink-600 duration-75'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='font-bold  hover:text-pink-600 duration-75'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='font-bold hover:text-pink-600 duration-75'>
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='font-bold hover:text-pink-600 duration-75'>
                    <Link to='certifications' smooth={true} duration={500}>
                        Certifications
                    </Link>
                </li>
                <li className='font-bold  hover:text-pink-600 duration-75'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='font-bold  hover:text-pink-600 duration-75'>
                    <Link to='blog' smooth={true} duration={500}>
                        Blog
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'mt-72 mr-10 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-3 text-xl hover:text-white'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-3 text-xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-3 text-xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-3 text-xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-3 text-xl'>
                    {' '}
                    <Link onClick={handleClick} to='certifications' smooth={true} duration={500}>
                        Certifications
                    </Link>
                </li>
                <li className='py-3 text-xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-1'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 pl-2'
                            href='https://www.linkedin.com/in/jubair-hossain-hstu/' target="_blank" rel="noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 pl-2'
                            href='https://github.com/JubaStriker' target="_blank" rel="noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='contact' smooth={true} duration={500}
                            className='flex justify-between items-center w-full text-gray-300 pl-2'
                            href='jubairhossain0604@gmail.com' target="_blank"
                        >
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 pl-2'
                            href='https://drive.google.com/file/d/1wuRkAQnS53aXNn4FOCsRHybpw56NvA_4/view?usp=sharing' target="_blank" rel="noreferrer"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
