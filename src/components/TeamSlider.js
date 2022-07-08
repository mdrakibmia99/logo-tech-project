import React from 'react';
import member1 from '../assets/png/team/member-1.png';
import member2 from '../assets/png/team/member-3.png';
import member3 from '../assets/png/team/member-3.png';
import member4 from '../assets/png/team/member-4.png';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const TeamSlider = () => {
    const members = [
        {
            avatar: member1,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member2,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member3,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member4,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member1,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member2,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member3,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member4,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member1,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member2,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member3,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        {
            avatar: member4,
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer',
            social: {
                facebook: 'https://www.facebook.com/rakibmia.dev',
                twitter: 'https://twitter.com/MdRakib63447617',
                linkedin: 'https://www.linkedin.com/in/md-rakib-mia/',
                github: 'https://github.com/mdrakibmia99'
            }
        },
        
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <section
            className='py-24 my-20'
            id='team-section'
        >
            <div className='container mx-auto'>
                <div className='flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4'>
                    <div>
                        <div className='mb-4'>
                            <h5 className='text-[20px] border-b-2 border-b-[#00b3ff] w-fit'>Our team</h5>
                        </div>
                        <div className='mb-12'>
                            <h3 className='text-3xl text-black'>
                                Meet our team members
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        swipeable='true'
                        responsive={responsive}
                        infinite={true}
                    >
                        {
                            members.map((member, index) => <div
                                key={index}
                                className='mx-2'
                            >
                                <div className='rounded-2xl py-4 border w-fit'>
                                    <div>
                                        <img src={member.avatar} alt={`avatar${index}`} className='mx-auto' />
                                    </div>
                                    <div
                                        className='bg-white text-center rounded-2xl'
                                    >
                                        <div className='ml-2 mb-2'>
                                            <h6 className='text-[#00B3FF]'>{member.name}</h6>
                                            <p className='text-sm'>{member.designation}</p>
                                        </div>
                                        <div className='mt-2'>
                                            <a href={member.social.facebook} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-facebook-square" aria-hidden="true"></i> </a>
                                            <a href={member.social.twitter} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-twitter" aria-hidden="true"></i> </a>
                                            <a href={member.social.linkedin} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-linkedin-square" aria-hidden="true"></i> </a>
                                            <a href={member.social.github} target={'_blank'} rel='noreferrer'><i className="mx-2 text-[23px] fa fa-github" aria-hidden="true"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TeamSlider;