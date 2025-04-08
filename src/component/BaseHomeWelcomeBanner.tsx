import welcomeImage from '../assets/images/WelcomeBannerImage.jpg';
import {Link} from "react-router-dom";

const BaseHomeWelcomeBanner = () => {
    return (
        <div className="baseHomeWelcomeBanner !bg-white ">
            <section className="">
                <div className="px-4 mx-3 sm:px-6 lg:px-12 xl:px-4 2xl:px-17 ">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2
                                className="text-[var(--color-primary)] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-6xl min-[1900px]:text-5xl"
                                style={{fontFamily: "Times New Roman, serif", lineHeight: "1.3"}}
                            >
                                Our Services
                            </h2>

                            <p className="max-w-2xl mt-3  font-thin leading-relaxed text-gray-700 md:mt-8 text-base md:text-lg lg:text-lg min-[1900px]:text-xl">
                                We connect businesses to international markets with seamless export solutions. With our expertise in logistics, compliance, and quality assurance, we ensure smooth and timely deliveries, helping your business grow beyond borders.

                            </p>

                            <p className="mt-7 text-xl text-gray-600 md:mt-14">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-[#c49a50] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                    <span className="relative text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-base md:text-xl min-[1900px]:text-2xl">
                                        Have a question?
                                    </span>
                                </span>

                                <span className="mt-2 sm:inline sm:mt-0 text-base md:text-xl  min-[1900px]:text-2xl">
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
                                className="mt-5 relative mx-auto min-[500px]:max-w-md xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
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
