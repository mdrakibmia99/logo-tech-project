import React from 'react';
import appdev from '../assets/png/icon/app-development-icon.png';
import seo from '../assets/png/icon/search-engine-optimization-icon.png';
import uiux from '../assets/png/icon/ui-ux-design-icon.png';
import webdev from '../assets/png/icon/web-development-icon.png';
import cardTop from '../assets/png/card-top-left-corner.png'
import cardBottom from '../assets/png/card-bottom-right-corner.png'
import serviceBG from '../assets/png/service-bg.png'

const Services = () => {
    const services = [
        {
            id: 1,
            icon: webdev,
            title: 'Web Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 2,
            icon: appdev,
            title: 'App Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 3,
            icon: uiux,
            title: 'UI/UX Design',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 4,
            icon: seo,
            title: 'Search Engine Optimization',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        }
    ];

    return (
        <section className=''>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <h1
                        className='blond_border_bg text-4xl font-bold'
                    >
                        Our Services
                    </h1>
                </div>
                <div className='grid lg:grid-cols-4 lg:gap-x-12 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12 mx-4 lg:my-16'>

                    {
                        services?.map((service) => <div
                            className='service-card border rounded-2xl px-8 py-20 shadow hover:shadow-lg hover:border-transparent duration-500 mx-h-[318px]'
                            style={{ backgroundImage: `url(${cardTop}),url(${cardBottom})` }}>
                            <div className='flex justify-end mb-4 pr-5'>
                                <div
                                    style={{ backgroundImage: `url(${serviceBG})` }}
                                    className='bg-no-repeat bg-contain h-[54px] w-[54px] flex justify-center items-center'
                                >
                                    <img src={service?.icon} alt="service logo" />
                                </div>
                            </div>
                            <div className='mb-2 text-end'>
                                <h4 className='font-bold'>
                                    {service?.title}
                                </h4>
                            </div>
                            <div>
                                <p className='text-small text-justify'>{service?.detail}</p>
                            </div>
                        </div>
                        )
                    }


                </div>
            </div>
        </section>
    );
};

export default Services;
