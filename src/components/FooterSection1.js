import React from 'react';
import telephone from '../assets/png/contact/contact-1.png';
import message from '../assets/png/contact/contact-2.png';
import location from '../assets/png/contact/contact-3.png';

const FooterSection1 = () => {
    const year = new Date().getFullYear();
    const member =
    {
        social: {
            facebook: 'https://www.facebook.com/hasibulislam999.dev',
            twitter: 'https://twitter.com/hasibulislam999',
            linkedin: 'https://www.linkedin.com/in/hasibulislam999/',
            github: 'https://github.com/hasibulislam999'
        }
    };
    const infos = [
        {
            logo: telephone,
            title: 'Call Us',
            line1: '+880 157521452',
            line2: '+880 373737324'
        },
        {
            logo: message,
            title: 'Email Us',
            line1: 'support@logotech.com',
            line2: 'logotech@gmail.com'
        },
        {
            logo: location,
            title: 'Locations',
            line1: 'Middle Sha Ali Bag, Mirpur',
            line2: 'Dhaka, Bangladesh'
        }
    ];

    return (
        <section
            className='mt-12 lg:mx-0 mx-4'
            id='footer-section'
        >
            <div>
                <div className='text-white'>
                    <div className='text-center mb-12'>
                        <h2 className='text-xl font-bold border-b-2 w-fit mx-auto px-3 pb-1'>LogoTech</h2>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-3 lg:gap-x-4 md:grid-cols-2 grid-cols-1 gap-6'>
                            {
                                infos.map(info => <div>
                                    <div className='flex lg:justify-center justify-start'>
                                        <div className='mr-2'>
                                            <img
                                                src={info.logo}
                                                alt={info.title}
                                                className='bg-white w-fit p-3 rounded-2xl'
                                            />
                                        </div>
                                        <div className='ml-2'>
                                            <h6 className='ml-2 text-lg font-medium mb-4'>{info.title}</h6>
                                            <p>{info.line1}</p>
                                            <p>{info.line2}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className='flex gap-x-3 justify-center'>
                            <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#banner-section">Home</a>
                            <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#service-section">Service</a>
                            <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#portfolio-section">Portfolio</a>
                            <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#testimonial-section">Blog</a>
                            <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#team-section">Company</a>
                        </div>
                    </div>
                </div>
                <hr className='my-12' />
                <div className='text-white text-center'>
                    <div className='mb-4'>
                        <p>
                            copyright@LogoTech {year} all the right reserved | Designed by LogoTech
                        </p>
                    </div>
                    <div>
                        <a href={member.social.facebook} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-facebook-square" aria-hidden="true"></i> </a>
                        <a href={member.social.twitter} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-twitter" aria-hidden="true"></i> </a>
                        <a href={member.social.linkedin} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-linkedin-square" aria-hidden="true"></i> </a>
                        <a href={member.social.github} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-github" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection1;