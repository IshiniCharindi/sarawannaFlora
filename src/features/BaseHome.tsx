import Slider from "../component/Slider.tsx";
import NavBar from "../component/NavBar.tsx";
import BaseHomeAbout from "../component/BaseHomeAbout.tsx";
import BaseHomeCountDown from "../component/BaseHomeCountDown.tsx";
import BaseHomeProduct from "../component/BaseHomeProduct.tsx";


const BaseHome = () => {
    return (
        <div className="basehome ">
            <NavBar/>
            <Slider/>
            <BaseHomeAbout/>
            <BaseHomeCountDown/>
            <BaseHomeProduct/>
        </div>
    );
};

export default BaseHome;