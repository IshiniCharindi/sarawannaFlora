import '../../styles/AboutUsWelcomeSection.css'
import AboutImageSlider from "./AboutImageSlider.tsx";

const AboutUsWelcomeSection = () => {
    return (
        <div className="mt-16 md:mt-20">
            <h1
                style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl"
            >
                About Us
            </h1>
            <div className="flex justify-center items-center mt-2">
                <p className="text-center text-gray-400 mb-5 relative inline-block leading-[3] tracking-[4px] text-sm sm:text-base">
                    Know about us
                    <span className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <div className="aboutUsWelcomeSection min-h-[100vh] md:min-h-[91vh] sm:h-[100vh] flex items-center justify-center py-10 sm:py-0 relative">
                {/* Dark overlay */}
                {/*<div className="absolute inset-0 bg-black/25 bg-opacity-10"></div>*/}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">*/}
                    <div className="grid grid-cols-1 items-center -mt-48">
                        <div className="mx-2 sm:mx-5 order-1 md:order-1 ">
                            <div className="mx-2 sm:mx-5 order-2 md:order-1   ">
                                <h2 className="aboutTopic text-2xl -mt-10 sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.8rem] 2xl:text-5xl font-bold mb-4 sm:mb-6 sm:mt-10 md:mt-10 text-black">
                                    About Saravana Flora
                                </h2>

                                <p className="text-gray-900 mb-4 text-sm sm:text-base p-2">
                                    Mas Impex (Pvt) Ltd is a trusted name in the global trade industry, specializing in
                                    wholesale import and export. Since our establishment in 2018, we have been committed to delivering
                                    high-quality products and seamless trade solutions across various industries.
                                </p>
                                <p className="text-gray-900 text-sm sm:text-base p-2">
                                    Headquartered in Colombo, Western Province, we take pride in offering customized
                                    sourcing and logistics services that empower businesses to thrive in international markets. With
                                    a dedicated team and a strong global network, we ensure efficiency, reliability, and excellence
                                    in every transaction. Whether it's sourcing premium products or managing smooth logistics,
                                    Mas Impex (Pvt) Ltd is your partner in global trade success.
                                </p>

                            </div>
                        </div>
                        {/*<div className="order-2 md:order-2 w-full flex justify-center">*/}
                        {/*    <AboutImageSlider/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsWelcomeSection;