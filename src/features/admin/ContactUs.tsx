import React from 'react';
import NavBar from "../../component/Other/NavBar.tsx";
import contactUsBanner from "../../assets/images/contactUsBanner.jpg";
import TopBanner from "../../component/Other/TopBanner.tsx";
import ContactUsMap from "../../component/ContactUs/ContactUsMap.tsx";
import ContactDetails from "../../component/ContactUs/ContactDetails.tsx";
import ContactForm from "../../component/ContactUs/ContactForm.tsx";
import Footer from "../../component/Other/Footer.tsx";

const ContactUs = () => {
    return (
        <div className="ContactUs bg-gray-200">
            <NavBar/>
            <TopBanner
                image={contactUsBanner}
                heading={"Your Gateway to International Markets"}
                para={"Expand globally with our reliable export services."}/>
            <ContactUsMap/>
            <ContactDetails/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default ContactUs;