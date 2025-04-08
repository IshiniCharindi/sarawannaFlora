import Slider from "../component/Slider.tsx";
import NavBar from "../component/NavBar.tsx";
import BaseHomeAbout from "../component/BaseHomeAbout.tsx";


const BaseHome = () => {
    return (
        <div className="basehome ">
            <NavBar/>
            <Slider/>
            <BaseHomeAbout/>
        </div>
    );
};

export default BaseHome;