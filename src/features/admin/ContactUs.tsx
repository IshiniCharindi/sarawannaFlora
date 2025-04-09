import React from 'react';
import NavBar from "../../component/Other/NavBar.tsx";
import contactUsBanner from "../../assets/images/contactUsBanner.jpg";
import TopBanner from "../../component/Other/TopBanner.tsx";
import ContactUsMap from "../../component/ContactUs/ContactUsMap.tsx";

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <TopBanner
                image={contactUsBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}/>
            <ContactUsMap/>
        </div>
    );
};

export default ContactUs;