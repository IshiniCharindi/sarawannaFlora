
import Footer from "../component/Footer.tsx";
import NavBar from "../component/NavBar.tsx";
import TopBanner from "../component/TopBanner.tsx";
import shopBanner from "../assets/images/shopBanner.jpg";

const Shop = () => {
    return (
        <div className="shop w-full ">
            <NavBar/>
            <TopBanner
                image={shopBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}/>
            <Footer/>
        </div>
    );
};

export default Shop;