import Slider from "../component/Slider.tsx";
import NavBar from "../component/NavBar.tsx";
import BaseHomeAbout from "../component/BaseHomeAbout.tsx";
import BaseHomeCountDown from "../component/BaseHomeCountDown.tsx";
import BaseHomeProduct from "../component/BaseHomeProduct.tsx";
import BaseHomeWelcomeBanner from "../component/BaseHomeWelcomeBanner.tsx";
import Footer from "../component/Footer.tsx";
import CategoryCarousel from "../component/CategorySlider.tsx";
import BaseHomeTopBanner from "../component/BaseHomeTopBanner.tsx";


const BaseHome = () => {
    return (
        <div className="basehome ">
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