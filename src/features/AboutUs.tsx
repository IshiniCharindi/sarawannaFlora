import TopBanner from "../component/TopBanner.tsx";
import aboutBanner from "../assets/images/aboutBanner.jpg";
import NavBar from "../component/NavBar.tsx";
import Footer from "../component/Footer.tsx";
import BaseHomeAbout from "../component/BaseHomeAbout.tsx";

const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <TopBanner
                image={aboutBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}
            />
            <BaseHomeAbout/>
            <Footer/>
        </div>
    );
};

export default AboutUs;