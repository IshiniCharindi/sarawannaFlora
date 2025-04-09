import '../styles/AboutUsWelcomeSection.css'
import AboutImageSlider from "./AboutImageSlider.tsx";
const AboutUsWelcomeSection = () => {
    return (
        <div className="aboutUsWelcomeSection h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="mx-2 sm:mx-5">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold mb-6">About Saravana Flora</h2>
                        <p className="text-gray-600 mb-4">
                            Mas Impex (Pvt) Ltd is a trusted name in the global trade industry, specializing in
                            wholesale
                            import and export. Since our establishment in 2018, we have been committed to delivering
                            high-quality products and seamless trade solutions across various industries.
                        </p>
                        <p className="text-gray-600">
                            Headquartered in Colombo, Western Province, we take pride in offering customized sourcing
                            and logistics services that empower businesses to thrive in international markets. With a
                            dedicated team and a strong global network, we ensure efficiency, reliability, and
                            excellence
                            in every transaction. Whether it's sourcing premium products or managing smooth logistics,
                            Mas Impex (Pvt) Ltd is your partner in global trade success.</p>
                    </div>
                    <AboutImageSlider/>


                </div>
            </div>
        </div>
    );
};

export default AboutUsWelcomeSection;