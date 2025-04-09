
import Footer from "../component/Other/Footer.tsx";
import NavBar from "../component/Other/NavBar.tsx";
import TopBanner from "../component/Other/TopBanner.tsx";
import shopBanner from "../assets/images/shopBanner.jpg";
import ShopProductListing from "../component/Shop/ShopProductListing.tsx";

const Shop = () => {
    return (
        <div className="shop w-full ">
            <NavBar/>
            <TopBanner
                image={shopBanner}
            heading={"Your Gateway to International Markets"}
            para={"Expand globally with our reliable export services."}/>
            <ShopProductListing/>
            <Footer/>
        </div>
    );
};

export default Shop;