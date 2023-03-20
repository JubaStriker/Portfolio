import React from 'react';
import Certificate from '../assets/certificates/Certificate.png';
import Recogletter from '../assets/certificates/Recogletter.png';

const Certifications = () => {
    return (
        <div name='certifications' className='bg-[#0a192f] text-gray-300 w-full min-h-screen py-32'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Certification</p>
                    <p className='py-6'></p>

                    <div className='flex flex-col gap-5 justify-start items-center'>
                        <img src={Certificate} alt="" className='h-3/4' />
                        <img src={Recogletter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;