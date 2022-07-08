import React from 'react';
import testimonial from '../assets/svg/testimonial-bg.svg';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import quote from '../assets/svg/quote.svg';
import avatar from '../assets/svg/testimonial.svg';

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
        {
            name: 'Adams Bil',
            designation: 'Software Engineer',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
        },
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section
            style={{ backgroundImage: `url(${testimonial})` }}
            className='bg-no-repeat bg-cover py-24 my-20'
            id='testimonial-section'
        >
            <div className='container mx-auto'>
                <div className='flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4'>
                    <div className='text-white'>
                        <div className='mb-2'>
                            <h5 className='text-[20px]'>Testimonial</h5>
                        </div>
                        <div className='mb-12'>
                            <h3 className='text-3xl'>
                                What our customers says <br />
                                about us
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        swipeable='true'
                        responsive={responsive}
                    >
                        {
                            testimonials.map((testimonial, index) => <div
                                key={index}
                                className='mx-2'
                            >
                                <div
                                    className='bg-white p-8 rounded-xl shadow-xl'
                                >
                                    <div className='mb-4'>
                                        <img
                                            src={quote}
                                            alt="quote"
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <p className='text-gray-400 text-justify'>
                                            {testimonial.feedback}
                                        </p>
                                    </div>
                                    <div className='flex items-center bg-gray-200 py-2 px-3 rounded'>
                                        <div className='mr-2'>
                                            <img
                                                src={avatar}
                                                alt={`avatar${index}`}
                                                className='h-[42px] w-[42px] object-cover rounded-full shadow-md'
                                            />
                                        </div>
                                        <div className='ml-2'>
                                            <h6>{testimonial.name}</h6>
                                            <p className='text-[#145CBD] text-sm'>{testimonial.designation}</p>
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

export default TestimonialSlider;