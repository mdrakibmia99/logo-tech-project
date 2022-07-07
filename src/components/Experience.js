import React from 'react';
import experienceBG from '../assets/svg/experience-bg.svg'

const Experience = () => {
    return (
        <section
        id='experience-section'
        style={{ backgroundImage: `url(${experienceBG})` }}
        className='bg-no-repeat bg-cover bg-bottom pb-24 my-20'
    >
        <div className='container mx-auto py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-0 mx-4'>
                <div className='text-white'>
                    <div className='mb-4'>
                        <h5 className='text-[20px]'> <span className='border-t-2'>Our</span> <span className='border-b-2'>Experience</span></h5>
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
                        <button className='py-2 px-4 rounded bg-[#00B3FF] border border-transparent hover:border hover:border-white hover:bg-transparent duration-500'>Contact us</button>
                    </div>
                </div>
               
            </div>
        </div>
    </section>

    );
};

export default Experience;