import React from 'react';
import earth from '../assets/svg/earth.svg';

const BannerBody = () => {
    return (
        <section>
            <div
                className='grid lg:gap-x-4 lg:grid-cols-2 grid-cols-1'
            >
                <div className='text-white lg:mx-0 mx-4'>
                    <div className='mb-[21px]'>
                        <h1 className='text-[45px] leading-[67.5px]'>
                            We Build To Notch <span className='text-[#00B3FF] font-bold'>Web Application For your Buisness</span>
                        </h1>
                    </div>
                    <div className='mb-8'>
                        <p className='leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris. Condimentum aliquet sed amet augue consectetur. Orci id in ut mi elit feugiat placerat.
                        </p>
                    </div>
                    <div className='flex gap-x-8'>
                        <button className='py-2 px-4 rounded bg-[#00B3FF] border border-transparent hover:border hover:border-white hover:bg-transparent duration-500'>Learn more</button>
                        <button className='py-2 px-4 rounded border border-white hover:border hover:border-transparent hover:bg-[#00B3FF] duration-500'><i className="fa fa-paper-plane" aria-hidden="true"></i> <span className='ml-2'>Contact us</span></button>
                    </div>
                    <div className='flex gap-x-2 mt-4'>
                        <a href="/" className='text-xl'>
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="/" className='text-xl'>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a href="/" className='text-xl'>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="/" className='text-xl'>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <img
                        src={earth}
                        alt="earth"
                        className='ml-auto'
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerBody;