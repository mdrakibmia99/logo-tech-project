import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ showModalContact, setShowModalContact }) => {
    const handleSentMessage = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            emailjs.sendForm("service_dozo57k", "template_cn03kep", event.target, "zVtSQ7zi_vZn2K-mv")
                .then((result) => {
                    console.log(result.text);
                    event.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }

        setShowModalContact(false)
    };

    return (
        <>
            {
                showModalContact &&
                <section>
                    <div>
                        <div class="flex justify-center items-center bg-gray-100">
                            <form
                                class="p-10 bg-white rounded flex justify-center items-center flex-col"
                                onSubmit={handleSentMessage}
                            >
                                <input type="text" name="name" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Name" required />
                                <input type="email" name="email" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Email" required />
                                <textarea name="message" className="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" placeholder='Message' autoComplete='off' />
                                <button className='px-6 py-2 border-transparent border-2 border-white bg-[#00affa] text-white rounded hover:border-[#00affa] hover:bg-transparent hover:text-black duration-500'>Send message</button>
                            </form>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default Contact;