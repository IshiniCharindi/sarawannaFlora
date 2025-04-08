
import Footer from "../component/Footer.tsx";
import NavBar from "../component/NavBar.tsx";
import TopBanner from "../component/TopBanner.tsx";
import aboutBanner from '../assets/images/aboutBanner.jpg'

const Shop = () => {
    return (
        <div className="shop w-full ">
            <NavBar/>
            <TopBanner
                image={aboutBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}/>
            <Footer/>
        </div>
    );
};

export default Shop;