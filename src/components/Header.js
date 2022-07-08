import React, { useState } from 'react';
import logo from '../assets/svg/LogoTech.svg';
import Modal from '../components/Modal';
import Login from '../components/Login';
import Register from '../components/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegistration, setShowModalRegistration] = useState(false);
    const login = 'Sign in';
    const register = 'Sign up';

    return (
        <section
            className='py-12'
            id='header-section'
        >
            <div className='flex lg:flex-row flex-col justify-between items-center lg:gap-y-0 gap-y-4'>
                <div>
                    <img src={logo} alt="site logo" />
                </div>
                <div className='text-white flex lg:gap-x-8 md:gap-x-6 gap-x-3'>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#banner-section">Home</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#service-section">Service</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#portfolio-section">Portfolio</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#testimonial-section">Blog</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="#team-section">Company</a>
                </div>
                <div className='text-white flex gap-x-8'>
                    {
                        user
                            ?
                            <>
                                <button
                                    className='px-4 py-1 border border-solid border-white rounded hover:bg-white hover:text-black duration-500'
                                    disabled
                                >
                                    {user?.displayName}
                                </button>
                                <button
                                    className='px-4 py-1 border border-solid border-white bg-white text-black rounded hover:bg-transparent hover:text-white duration-500'
                                    onClick={() => signOut(auth)}
                                >
                                    Logout
                                </button>
                            </>
                            :
                            <>
                                <button
                                    className='px-4 py-1 border border-solid border-white rounded hover:bg-white hover:text-black duration-500'
                                    onClick={() => setShowModalRegistration(true)}
                                >
                                    Sign Up
                                </button>
                                <button
                                    className='px-4 py-1 border border-solid border-white bg-white text-black rounded hover:bg-transparent hover:text-white duration-500'
                                    onClick={() => setShowModalLogin(true)}
                                >
                                    Sign In
                                </button>
                            </>
                    }
                </div>
            </div>
            {
                (showModalLogin &&
                    <Modal
                        showModal={showModalLogin}
                        setShowModal={setShowModalLogin}
                        title={login}
                        content={<Login
                            showModalLogin={showModalLogin}
                            setShowModalLogin={setShowModalLogin}
                        />}
                    />)

                ||

                (showModalRegistration &&
                    <Modal
                        showModal={showModalRegistration}
                        setShowModal={setShowModalRegistration}
                        title={register}
                        content={<Register
                            showModalRegistration={showModalRegistration}
                            setShowModalRegistration={setShowModalRegistration}
                        />}
                    />)
            }
        </section>
    );
};

export default Header;