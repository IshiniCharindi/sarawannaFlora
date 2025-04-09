import React from 'react';
import ContactFormBg from "../../assets/images/ContactFormBg.jpg";

const ContactForm = () => {
    return (
        <div className="contactForm">
            <section className="relative  py-16 sm:py-20 lg:py-28">
                <div
                    className="relative px-6 py-12 sm:p-12"
                    style={{
                        backgroundImage: `url(${ContactFormBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                {/* Background only for the form container */}
                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="overflow-hidden p-10 rounded-2xl">
                        {/* Background image container for the form */}

                            {/* Dark overlay for better readability */}
                            <div className="absolute inset-0 bg-black rounded-2xl opacity-1"></div>

                            {/* Form content with relative positioning */}
                            <div className="relative z-10">
                                <h3 className="text-3xl font-semibold text-center text-black">Send us a message</h3>
                                <form action="#" method="POST" className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-black"> Your name </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your full name"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-black"> Email address </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-black"> Phone number </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    placeholder="Enter your phone number"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-black"> Company name </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name="CompanyName"
                                                    placeholder="Enter your company name"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="" className="text-base font-medium text-black"> Message </label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    name="message"
                                                    placeholder="Type your message here..."
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[var(--color-primary)] border border-transparent rounded-md focus:outline-none hover:bg-[var(--color-light)] focus:bg-[var(--color-light)] hover:shadow-lg transform hover:-translate-y-1"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;