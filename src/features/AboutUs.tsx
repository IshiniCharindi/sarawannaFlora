import TopBanner from "../component/Other/TopBanner.tsx";
import aboutBanner from "../assets/images/aboutBanner.jpg";
import NavBar from "../component/Other/NavBar.tsx";
import Footer from "../component/Other/Footer.tsx";
import AboutUsMiddleBanner from "../component/AboutUs/AboutUsMiddleBanner.tsx";
import AboutContent from "../component/AboutUs/AboutContent.tsx";
import aboutTopBanner from '../assets/images/aboutTopBanner.jpg'
import logo from '../assets/images/logo with bg.jpeg'
import AboutUsWelcomeSection from "../component/AboutUs/AboutUsWelcomeSection.tsx";

const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <TopBanner
                image={aboutBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}
            />
            <AboutUsWelcomeSection/>
            <AboutContent
                images={[
                    aboutTopBanner,
                    logo
                ]}
                heading="Who We Are?"
                description="G Capital is a trusted export company dedicated to simplifying global trade. With a focus on quality,
                reliability, and customer satisfaction, we connect businesses worldwide to premium products and seamless export
                solutions. At G Capital, we’re committed to driving global growth and creating opportunities for businesses to thrive. "
            />
            {/*<AboutUsMiddleBanner/>*/}
            <Footer/>
        </div>
    );
};

export default AboutUs;