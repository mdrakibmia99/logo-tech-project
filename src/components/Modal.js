import React from "react";

export default function Modal({ showModal, setShowModal, title, content }) {
    return (
        <>
            {
                showModal && (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            {title}
                                        </h3>
                                        <button
                                            className="h-[30px] w-[30px] bg-red-500 text-white rounded-full border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 ease-linear transition-all duration-150"
                                            onClick={() => setShowModal(false)}
                                        >
                                            x
                                        </button>
                                    </div>
                                    {/*body*/}
                                    {content}
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                )
            }
        </>
    );
}