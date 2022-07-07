import React from 'react';
import pofo1 from '../assets/png/portfolio/pofo-1.png';
import pofo2 from '../assets/png/portfolio/pofo-2.png';
import pofo3 from '../assets/png/portfolio/pofo-3.png';
import pofo4 from '../assets/png/portfolio/pofo-4.png';
import pofo5 from '../assets/png/portfolio/pofo-5.png';

const Portfolio = () => {
    const portfolioDetails = [
        {
            title: 'Mechine Learning NFT Softweare',
            desc: 'mauris. Condimentum aliquet sed amet augue consectetur. Orci id in ut.',
            thumb: pofo1
        },
        {
            title: 'Arduino Logig Circuit Intra-map',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus. Ullam!',
            thumb: pofo2
        },
        {
            title: 'UI Network Fragments Radar',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus. Ullam!',
            thumb: pofo3
        },
        {
            title: 'Biometric Authentication & Authorization',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus. Ullam!',
            thumb: pofo4
        },
        {
            title: 'AR/VR Ornithologic',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus. Ullam!',
            thumb: pofo5
        }
    ];

    return (
        <section
            className='py-24 my-20'
            id='portfolio-section'
        >
            <div className='container mx-auto'>
                <div className='lg:mx-0 mx-4'>
                    <div className='flex justify-between'>
                        <div>
                            <div className='mb-2'>
                                <h5 className='text-[20px]'>Our Portfolio</h5>
                            </div>
                            <div className='mb-12'>
                                <h3 className='text-3xl text-[#09B7E2]'>
                                    Take a Look Some of our <br />
                                    Complete Projects
                                </h3>
                            </div>
                        </div>
                        <div>
                            <button className='py-2 px-4 rounded bg-[#00B3FF] border border-transparent hover:border hover:border-[#00B3FF] hover:bg-transparent duration-500 text-white hover:text-black'>View All</button>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4'>
                        <div
                            style={{ backgroundImage: `url(${pofo1})` }}
                            className='bg-no-repeat bg-cover bg-center rounded-md text-white flex flex-col justify-center items-center relative lg:py-0 py-4 lg:mb-0 mb-4'
                        >
                            <div id='foreground-bg'></div>
                            <h3 className='font-bold text-2xl z-[1]'>{portfolioDetails[0].title}</h3>
                            <p className='z-[1] text-center'>{portfolioDetails[0].desc}</p>
                        </div>
                        <div>
                            <div
                                className='h-[400px] overflow-y-auto px-4'
                            >
                                {
                                    portfolioDetails.slice(1).map((pofo, index) =>
                                        <div
                                            key={index}
                                            className={`flex ${index !== (portfolioDetails.length - 2) && 'mb-4'}`}
                                        >
                                            <div className='mr-2'>
                                                <img
                                                    src={pofo.thumb}
                                                    alt={`portfolio${index + 1}`}
                                                    className=''
                                                />
                                            </div>
                                            <div className='ml-2'>
                                                <h3 className='mb-2 font-bold'>{pofo.title}</h3>
                                                <p className='mb-1 text-gray-500'>{pofo.desc}</p>
                                                <div className='flex justify-end'>
                                                    <button className='border-b-2 border-r-2 border-r-transparent border-b-[#00affa] hover:border-b-transparent px-2 hover:border-r-2 hover:border-r-[#00affa] duration-500'>View Project</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;