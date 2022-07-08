import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Reset = ({ showModalReset, setShowModalReset }) => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleReset = async(event) => {
        event.preventDefault();

        await sendPasswordResetEmail(event.target.email.value);
        setShowModalReset(false)
    };
    return (
        <>
            {
                showModalReset &&
                <section>
                    <div>
                        <div class="flex justify-center items-center bg-gray-100">
                            <form
                                class="p-10 bg-white rounded flex justify-center items-center flex-col"
                                onSubmit={handleReset}
                            >
                                <input type="email" name="email" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Email" required />
                                <button className='px-6 py-2 border-transparent border-2 border-white bg-[#00affa] text-white rounded hover:border-[#00affa] hover:bg-transparent hover:text-black duration-500'>Reset</button>
                            </form>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default Reset;