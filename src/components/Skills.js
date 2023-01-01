import React from 'react';
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Bootstrap from '../assets/Bootstrap.png'
import Express from '../assets/Ex.png'
import JWT from '../assets/JWT.png'

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300 w-full min-h-screen py-32'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="500"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={Html} alt='Html' />
                            <p className='my-4'>HTML</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1000"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={Css} alt='Css' />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={JavaScript} alt='HJavaScript' />
                            <p className='my-4'>JavaScript</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={ReactImg} alt='React' />
                            <p className='my-4'>React</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="500"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={Node} alt='Node' />
                            <p className='my-4'>Node</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1000"
                            className='shadow-md shadow-[#040c16]  p-4'>
                            <img className='w-32 mx-auto rounded-full' src={Express} alt='Express' />
                            <p className='my-4'>Express</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={Github} alt='Github' />
                            <p className='my-4'>Github</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md shadow-[#040c16]  p-4'>
                            <img className='w-32 mx-auto' src={Mongo} alt='MongoDB' />
                            <p className='my-4'>MongoDB</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="500"
                            className='shadow-md shadow-[#040c16]  p-4'>
                            <img className='w-32 mx-auto' src={JWT} alt='JSON Web Token' />
                            <p className='my-4'>JWT</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1000"
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                            <img className='w-32 mx-auto' src={Firebase} alt='Firebase' />
                            <p className='my-4'>Firebase</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md shadow-[#040c16]  p-4'>
                            <img className='w-32 mx-auto' src={Tailwind} alt='Tailwind' />
                            <p className='my-4'>Tailwind</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md shadow-[#040c16]  p-4'>
                            <img className='w-32 h-32 mx-auto' src={Bootstrap} alt='Bootstrap' />
                            <p className='my-4'>Bootstrap</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Skills;