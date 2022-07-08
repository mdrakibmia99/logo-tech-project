import React from 'react';
import Header from './Header';
import banner from '../assets/svg/banner-bg.svg';
import BannerBody from './BannerBody';
import rectangle1 from '../assets/svg/rectangle-1.svg';
import rectangle2 from '../assets/svg/rectangle-2.svg';
import rectangle3 from '../assets/svg/rectangle-3.svg';
import rectangle4 from '../assets/svg/rectangle-4.svg';
import rectangle5 from '../assets/svg/rectangle-5.svg';

const Banner = () => {
    return (
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className='pb-24 bg-no-repeat bg-cover bg-bottom relative'
            id='banner-section'
        >
            <div className='container mx-auto'>
                <Header />
                <BannerBody />
            </div>
            <img className='absolute top-[136px] left-[254px] lg:block hidden' src={rectangle1} alt="rectangle1" />
            <img className='absolute top-[110px] left-[883px] lg:block hidden' src={rectangle2} alt="rectangle2" />
            <img className='absolute top-[363px] left-[217px] lg:block hidden' src={rectangle3} alt="rectangle3" />
            <img className='absolute top-[390px] left-[498px] lg:block hidden' src={rectangle4} alt="rectangle4" />
            <img className='absolute top-[350px] left-[998px] lg:block hidden' src={rectangle5} alt="rectangle5" />
        </section>
    );
};

export default Banner;