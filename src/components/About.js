import React from 'react';
import img from '../assets/BG-DP.png'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div data-aos="fade-right" className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-700'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div data-aos="fade-up" className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Jubair, nice to meet you. Please take a look around</p>
                    </div>
                    <div data-aos="fade-down">
                        <p>
                            I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row max-w-[1000px] md:gap-32 my-20 justify-between items-center'>
                    <img data-aos="fade-up" src={img} alt="" className='h-[300px] w-[250px] rounded-full' />
                    <h1 className='pb-44 md:py-0' data-aos="fade-down">Here I am. A 23 years old web developer. Currently doing my 2nd year of B.Sc (Engineering) in Electrical and Electronic Engineering.</h1>

                </div>
            </div>


        </div>
    );
};

export default About;