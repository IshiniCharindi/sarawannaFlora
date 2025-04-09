import '../styles/AboutUsWelcomeSection.css'
import AboutImageSlider from "./AboutImageSlider.tsx";
const AboutUsWelcomeSection = () => {
    return (
        <div className="mt-20">
            <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> About
                Us</h1>
            <div className="flex justify-center items-center">
                <p className="text-center text-gray-400 mb-5 relative inline-block leading-[3] tracking-[4px]">
                    Know about us
                    <span
                        className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <div className="aboutUsWelcomeSection h-[91vh] flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="mx-2 sm:mx-5">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold mb-6">About Saravana
                                Flora</h2>
                            <p className="text-gray-600 mb-4">
                                Mas Impex (Pvt) Ltd is a trusted name in the global trade industry, specializing in
                                wholesale
                                import and export. Since our establishment in 2018, we have been committed to delivering
                                high-quality products and seamless trade solutions across various industries.
                            </p>
                            <p className="text-gray-600">
                                Headquartered in Colombo, Western Province, we take pride in offering customized
                                sourcing
                                and logistics services that empower businesses to thrive in international markets. With
                                a
                                dedicated team and a strong global network, we ensure efficiency, reliability, and
                                excellence
                                in every transaction. Whether it's sourcing premium products or managing smooth
                                logistics,
                                Mas Impex (Pvt) Ltd is your partner in global trade success.</p>
                        </div>
                        <AboutImageSlider/>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUsWelcomeSection;