import React from 'react';
import appdev from '../assets/png/icon/app-development-icon.png';
import seo from '../assets/png/icon/search-engine-optimization-icon.png';
import uiux from '../assets/png/icon/ui-ux-design-icon.png';
import webdev from '../assets/png/icon/web-development-icon.png';

const Services = () => {
    const services = [
        {
            icon: webdev,
            title: 'Web Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            icon: appdev,
            title: 'App Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            icon: uiux,
            title: 'UI/UX Design',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            icon: seo,
            title: 'Search Engine Optimization',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        }
    ];

    return (
        <section>
            <div>
                <div className='flex justify-center'>
                    <h1
                        className='blond_border_bg text-4xl font-bold'
                    >
                        Our Services
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Services;
