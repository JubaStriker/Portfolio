import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Home = () => {
    return (
        <div name='home' className='w-full min-h-screen bg-[#0a192f] pb-64 md:pb-40'>

            {/* Container */}
            <div className='flex flex-col items-center '>
                <div className='flex pt-[200px] flex-col md:flex-row justify-evenly items-center'>
                    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                        <p className='text-pink-600'>Hi, my name is</p>
                        <h1 data-aos="zoom-in" data-aos-duration="1500" className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Md Jubair Hossain</h1>
                        <h2 data-aos="zoom-in" data-aos-duration="1500" className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a
                            <Typewriter
                                options={{
                                    strings: ['Web', 'MERN stack', 'Front End', 'Fullstack'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> developer
                        </h2>
                        <h2 className='text-[#8892b0] py-4 max-w-[700px]'>I am a MERN stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</h2>
                        <Link to='work' smooth={true} duration={500}>
                            <div>
                                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center gap-2 hover:bg-pink-600 hover:border-pink-600 '>View Work
                                    <span className='group-hover:rotate-90 duration-100'>
                                        <HiArrowNarrowRight />
                                    </span>
                                </button>
                            </div>
                        </Link>
                    </div>



                </div>
                {/* Mobile  */}
                <div className='lg:hidden mb-36'>
                    <ul className='grid grid-cols-2'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center  bg-blue-600'>
                            <a
                                className='flex justify-between items-center w-full text-gray-300 pl-2'
                                href='https://www.linkedin.com/in/jubair-hossain-hstu/' target="_blank" rel="noreferrer"
                            >
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center  bg-[#333333]'>
                            <a
                                className='flex justify-between items-center w-full text-gray-300 pl-2'
                                href='https://github.com/JubaStriker' target="_blank" rel="noreferrer"
                            >
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center  bg-[#6fc2b0]'>
                            <Link to='contact' smooth={true} duration={500}
                                className='flex justify-between items-center w-full text-gray-300 pl-2'
                                href='jubairhossain0604@gmail.com' target="_blank"
                            >
                                Email <HiOutlineMail size={30} />
                            </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center  bg-[#565f69]'>
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
        </div >
    );
};

export default Home;