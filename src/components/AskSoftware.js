import React, { useState } from 'react';
import Contact from './Contact';
import Modal from './Modal';

const AskSoftware = () => {
    const [showModalContact, setShowModalContact] = useState(false);
    const contact = 'Contact form';

    return (
        <section
            className='lg:mx-0 mx-4'
        >
            <div
                className='bg-white lg:w-1/2 w-full mx-auto rounded-md shadow-2xl py-12 px-16'
            >
                <div className='flex lg:justify-between justify-start items-end lg:flex-row md:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4'>
                    <div>
                        <div className='mb-4'>
                            <h5 className='text-[20px] border-b-2 border-b-[#00b3ff] w-fit'>Need a software</h5>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl text-black'>
                                We are here to help you <br /> Get in touch with us
                            </h3>
                        </div>
                    </div>
                    <div className='lg:mt-0 md:mt-0 mt-4'>
                        <button className='py-2 px-4 rounded bg-[#00B3FF] border border-transparent hover:border hover:border-[#00B3FF] hover:bg-transparent duration-500 text-white hover:text-black' onClick={() => setShowModalContact(true)}>Contact us</button>
                    </div>
                </div>
                <div></div>
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

export default AskSoftware;