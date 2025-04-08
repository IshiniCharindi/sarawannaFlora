import welcomeImage from '../assets/images/WelcomeBannerImage.jpg';
import {Link} from "react-router-dom";
import React from "react";

const BaseHomeWelcomeBanner = () => {
    return (
        <div className="baseHomeWelcomeBanner !bg-white mx-5 mb-20">
            <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> Our Services</h1>
            <div className="flex justify-center items-center">
                <p className="text-center text-gray-400 relative inline-block leading-[3] tracking-[4px]">
                    Our Services
                    <span
                        className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <section className="mt-4">
                <div className="px-4 mx-3 sm:px-6 lg:px-12 xl:px-4 2xl:px-17 ">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2
                                className="max-md:text-center text-[var(--color-primary)] font-bold text-4xl"
                                style={{fontFamily: "Times New Roman, serif", lineHeight: "1.3"}}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </h2>

                            <p className="max-w-2xl mt-3  font-thin leading-relaxed text-gray-700 md:mt-8 text-base md:text-lg lg:text-lg min-[1900px]:text-xl">
                                We connect businesses to international markets with seamless export solutions. With our
                                expertise in logistics, compliance, and quality assurance, we ensure smooth and timely
                                deliveries, helping your business grow beyond borders.

                            </p>

                            <p className="mt-7 text-xl text-gray-600 md:mt-14">
                                <span className="relative inline-block">
                                    <span
                                        className="absolute inline-block w-full bottom-0.5 h-2 bg-[#c49a50] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                    <span
                                        className="relative text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-base md:text-xl min-[1900px]:text-2xl">
                                        Have a question?
                                    </span>
                                </span>

                                <span className="mt-2 sm:inline sm:mt-0 text-base md:text-xl min-[1900px]:text-2xl">
                                    &nbsp;It's time to{" "}
                                    <Link
                                        to={"/contact"}
                                        title="Contact Us"
                                        className="underline text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all duration-200 hover:underline hover:underline-offset-4"
                                    >
                                        Contact Us
                                    </Link>
                                </span>
                            </p>
                        </div>

                        <div className="relative ">
                            <img
                                className="mt-5 md:mx-5 relative mx-auto min-[500px]:max-w-sm  lg:max-w-md xl:mx-auto 2xl:origin-bottom "
                                src={welcomeImage}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BaseHomeWelcomeBanner;
