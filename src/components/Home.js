import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';




const Home = () => {
    return (
        <div name='home' className='w-full min-h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='flex pt-[200px] flex-col md:flex-row justify-evenly items-center'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-pink-600'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Md Jubair Hossain</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a
                        <Typewriter
                            options={{
                                strings: ['Web', 'MERN stack', 'Front End'],
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
        </div >
    );
};

export default Home;