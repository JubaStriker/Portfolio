import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/46c1fe50-e136-439b-bf69-bf03332ef43c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Contact me</p>
                    <p className='text-gray-300 py-4'>Send me an email - jubairhossain0604@gmail.com</p>
                </div>
                <input className='my-4 p-1 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='my-4 p-2 bg-[#ccd6f6]' name="message" id="" rows="10" placeholder='Type your message here'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
};

export default Contact;