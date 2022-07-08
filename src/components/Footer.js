import React from 'react';
import AskSoftware from './AskSoftware';
import footerBG from '../assets/svg/footer-bg.svg';
import FooterSection1 from './FooterSection1';

const Footer = () => {
    return (
        <section
            style={{ backgroundImage: `url(${footerBG})` }}
            className='bg-no-repeat bg-cover py-24 mt-20'
        >
            <div className='container mx-auto'>
                <div className='relative'>
                    <AskSoftware />
                    <FooterSection1 />
                </div>
            </div>
        </section>
    );
};

export default Footer;