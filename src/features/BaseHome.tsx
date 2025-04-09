import Slider from "../component/BaseHome/Slider.tsx";
import NavBar from "../component/Other/NavBar.tsx";
import BaseHomeCountDown from "../component/BaseHome/BaseHomeCountDown.tsx";
import BaseHomeProduct from "../component/BaseHome/BaseHomeProduct.tsx";
import BaseHomeWelcomeBanner from "../component/BaseHome/BaseHomeWelcomeBanner.tsx";
import Footer from "../component/Other/Footer.tsx";
import CategoryCarousel from "../component/BaseHome/CategorySlider.tsx";
import BaseHomeTopBanner from "../component/BaseHome/BaseHomeTopBanner.tsx";


const BaseHome = () => {
    return (
        <div className="basehome w-full ">
            <NavBar/>
            <Slider/>
            <BaseHomeTopBanner/>
            <CategoryCarousel/>
            <BaseHomeCountDown/>
            <BaseHomeProduct/>
            <BaseHomeWelcomeBanner/>
            <Footer/>
        </div>
    );
};

export default BaseHome;