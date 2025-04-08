import aboutImage from "../assets/videos/about.mp4"
import {Link} from "react-router-dom";
const BaseHomeTopBanner = () => {
    return (
        <div className="mt-10">
            <section className="py-10 bg-[var(--color-bg)] sm:py-10">
                <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> Welcome To Sarvana Flora</h1>
                <div className="flex justify-center items-center">
                    <p className="text-center text-gray-400 mb-5 relative inline-block leading-[3] tracking-[4px]">
                        Know about us
                        <span
                            className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                    </p>
                </div>


                <div className="max-w-7xl px-4 mx-auto mt-5 sm:px-6 lg:px-8">
                    <div
                        className="grid items-center grid-cols-1 lg:grid-cols-12 lg:items-stretch gap-y-8 gap-x-5">
                        <div className="md:col-span-6 relative">
                            <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
                                <video
                                    src={aboutImage}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-[370px] object-cover border-white"
                                    style={{borderWidth: "16px"}}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-6 flex flex-col justify-between my-4 mx-4">
                            <blockquote>
                                <h1 className="font-bold title max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl min-2xl:text-5xl">Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit. </h1>
                                <p className="text-justify sm:text-align text-lg text-gray-700 font-extrabold  mt-2">You made it so simple. My new site is
                                    so much faster and easier to work with than my old site.</p>
                                <p className="text-justify sm:text-align text-base text-black mt-2 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus dolores
                                    aspernatur animi perferendis iste! Culpa aut enim debitis optio illum ipsum quis
                                    perferendis dolor expedita. Similique necessitatibus inventore doloremque.
                                </p>
                            </blockquote>

                            <div className="-mt-4">
                                <Link to="/contactus ">
                                    <button
                                        className="text-white font-bold border-1 rounded px-4 py-2 mx-0 sm:px-7 sm:py-3 text-center bg-[var(--color-primary)] m-8 max-w-[300px] max-sm:text-xs text-sm md:text-base min-2xl:text-lg">
                                        Contact US
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BaseHomeTopBanner;