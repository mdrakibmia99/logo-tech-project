import React from 'react';
import logo from '../assets/svg/LogoTech.svg';

const Header = () => {
    return (
        <section className='py-12'>
            <div className='flex lg:flex-row flex-col justify-between items-center lg:gap-y-0 gap-y-4'>
                <div>
                    <img src={logo} alt="site logo" />
                </div>
                <div className='text-white flex lg:gap-x-8 md:gap-x-6 gap-x-3'>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="/">Home</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="/">Service</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="/">Portfolio</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="/">Blog</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="/">Company</a>
                </div>
                <div className='text-white flex gap-x-8'>
                    <button className='px-4 py-1 border border-solid border-white rounded hover:bg-white hover:text-black duration-500'>Sign Up</button>
                    <button className='px-4 py-1 border border-solid border-white bg-white text-black rounded hover:bg-transparent hover:text-white duration-500'>Sign In</button>
                </div>
            </div>
        </section>
    );
};

export default Header;