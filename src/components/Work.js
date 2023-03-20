import React from 'react';
import PCT from '../assets/projects/Croped/PCTreasure.png';
import Codabyte from '../assets/projects/Croped/Codabyte.png';
import Photoholic from '../assets/projects/Croped/Photoholic.png';
import Tap from '../assets/projects/Croped/tap-for-delicious.web.app_.png';
import Streamify from '../assets/projects/Croped/streamify-eb7bf.web.app_.png'


const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] text-gray-300 w-full min-h-screen py-32'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
                    <p className='py-6'>Checkout my recent works</p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid item */}
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1200"
                        style={{ backgroundImage: `url(${Tap})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-center tracking-wider'>
                                Tap For Delicious
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tap-for-delicious.web.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>
                                <a href="https://github.com/tasmia-rahman/tap-for-delicious-client" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1700"
                        style={{ backgroundImage: `url(${PCT})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-center tracking-wider'>
                                PC Treasure
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://pc-treasure.web.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>
                                <a href="https://github.com/JubaStriker/pc-treasure-client" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2200"
                        style={{ backgroundImage: `url(${Streamify})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-center tracking-wider'>
                                Streamify
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://streamify-eb7bf.web.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>
                                <a href="https://github.com/JubaStriker/Streamify-client-CipherSchools" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2200"
                        style={{ backgroundImage: `url(${Codabyte})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-center tracking-wider'>
                                Codabyte
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://practice-efc88.web.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>
                                <a href="https://github.com/JubaStriker/codabyte-client" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1200"
                        style={{ backgroundImage: `url(${Photoholic})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-center tracking-wider'>
                                PHOTOHOLIC
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://photoholic-d6cec.web.app/home" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>
                                <a href="https://github.com/JubaStriker/photoholic-client" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Work;