import React from 'react';

const ContactUsMap = () => {
    const address = "No 692/37/6 K J Peris Mawatha, Pattiya Junction, Kelaniya,Colombo,Srilanka";
    const encodedAddress = encodeURIComponent(address);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <div className="mt-10 mb-10">
                <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                    className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl">
                    Contact Us</h1>
                <div className="flex justify-center items-center">
                    <p className="text-center text-gray-400 relative inline-block leading-[3] tracking-[4px]">
                        Get in Touch
                        <span
                            className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                    </p>
                </div>
            </div>

            <div className="flex justify-center w-full h-full">
                <iframe
                    className="w-[95%] h-full mx-auto"
                    title="Google Maps Location"
                    frameBorder="0"
                    style={{ border: '4px solid black' }}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCFC2E2leU5S82fWnQqaYNsT6Kay97SPe8&q=${encodedAddress}`}
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    );
};

export default ContactUsMap;