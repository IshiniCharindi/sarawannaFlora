import NavBar from "../component/Other/NavBar.tsx";
import CartContent from "../component/Shop/CartContent.tsx";
import Footer from "../component/Other/Footer.tsx";

const CartPage = () => {
    return (
        <div className="w-full">
            <NavBar/>
            <CartContent/>
            <Footer/>
        </div>
    );
};

export default CartPage;