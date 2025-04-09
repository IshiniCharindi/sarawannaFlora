import NavBar from "../component/Other/NavBar.tsx";
import ProductDetails from "../component/Shop/ProductDetails.tsx";
import Footer from "../component/Other/Footer.tsx";


const FlowerProductDetailView = () => {

    return (
        <div className="w-full">
            <NavBar/>
            <ProductDetails/>
            <Footer/>
        </div>
    );
};

export default FlowerProductDetailView;