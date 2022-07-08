import React, { useState } from 'react';
import experience from '../assets/svg/experience-bg.svg';
import Contact from './Contact';
import Modal from './Modal';

const Experience = () => {
    const [showModalContact, setShowModalContact] = useState(false);
    const contact = 'Contact form';

    return (
        <section
            id='experience-section'
            style={{ backgroundImage: `url(${experience})` }}
            className='bg-no-repeat bg-cover bg-bottom pb-24 my-20'
        >
            <div className='container mx-auto py-20'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-0 mx-4'>
                    <div className='text-white'>
                        <div className='mb-4'>
                            <h5 className='text-[20px]'>Our <span className='border-b-2'>Experience</span></h5>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-[43px]'>
                                WE have completed over 150+ <br />
                                Projects Successfully
                            </h2>
                        </div>
                        <div className='mb-8'>
                            <p className='font-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris. Condimentum aliquet sed amet augue consectetur. Orci id in ut
                            </p>
                        </div>
                        <div className=''>
                            <button className='py-2 px-4 rounded bg-[#00B3FF] border border-transparent hover:border hover:border-white hover:bg-transparent duration-500' onClick={() => setShowModalContact(true)}>Contact us</button>
                        </div>
                    </div>
                    <div className='relative lg:block hidden'>
                        {/* circle 1 */}
                        <div className='absolute lg:top-0 lg:left-[15%]'>
                            <div className='h-[150px] w-[150px] flex flex-col justify-center items-center bg-[#378ecd] rounded-full relative shadow-xl'>
                                <div className='w-fit text-white text-3xl'>150+</div>
                                <div
                                    className='w-fit bg-white px-4 py-1 rounded-2xl whitespace-nowrap text-sm absolute top-[70%] left-[30%]'
                                >
                                    <i class="fa fa-unlock" aria-hidden="true"></i> <span>Completed Projects</span></div>
                            </div>
                        </div>
                        {/* circle 2 */}
                        <div className='absolute lg:top-[40%] lg:left-[75%]'>
                            <div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-[#378ecd] rounded-full relative shadow-xl'>
                                <div className='w-fit text-white text-2xl'>200+</div>
                                <div
                                    className='w-fit bg-white px-4 py-1 rounded-2xl whitespace-nowrap text-sm absolute top-[70%] left-[30%]'
                                >
                                    <i class="fa fa-users" aria-hidden="true"></i> <span>Happy Customers</span></div>
                            </div>
                        </div>
                        {/* circle 3 */}
                        <div className='absolute lg:top-[90%] lg:left-[10%]'>
                            <div className='h-[100px] w-[100px] flex flex-col justify-center items-center bg-[#378ecd] rounded-full relative shadow-xl'>
                                <div className='w-fit text-white text-xl'>40+</div>
                                <div
                                    className='w-fit bg-white px-4 py-1 rounded-2xl whitespace-nowrap text-sm absolute top-[70%] left-[30%]'
                                >
                                    <i class="fa fa-trophy" aria-hidden="true"></i> <span>Awards</span></div>
                            </div>
                        </div>
                        {/* circle 4 */}
                        <div className='absolute lg:top-[55%] lg:left-[40%]'>
                            <div className='h-[110px] w-[110px] flex flex-col justify-center items-center bg-[#378ecd] rounded-full relative shadow-xl'>
                                <div className='w-fit text-white text-xl'>80+</div>
                                <div
                                    className='w-fit bg-white px-4 py-1 rounded-2xl whitespace-nowrap text-sm absolute top-[70%] left-[30%]'
                                >
                                    <i className="fa fa-compress" aria-hidden="true"></i> <span>Team Members</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModalContact &&
                <Modal
                    showModal={showModalContact}
                    setShowModal={setShowModalContact}
                    title={contact}
                    content={<Contact
                        showModalContact={showModalContact}
                        setShowModalContact={setShowModalContact}
                    />}
                />
            }
        </section>
    );
};

export default Experience;