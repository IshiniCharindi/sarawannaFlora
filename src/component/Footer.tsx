import React from 'react';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';
import location from '../assets/icons/location.png';
import arrow from '../assets/icons/arrow (2).png';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

const Footer = () => {
    // Social media data
    const socialMedia = [
        {
            name: 'Twitter',
            icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
            ),
            url: '#'
        },
        {
            name: 'Facebook',
            icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
            ),
            url: '#'
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                    <circle cx="16.806" cy="7.207" r="1.078" />
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
            ),
            url: '#'
        },
        {
            name: 'GitHub',
            icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                </svg>
            ),
            url: '#'
        }
    ];

    // Quick links data
    const quickLinks = [
        { name: 'About', url: '#', icon: arrow },
        { name: 'Features', url: '#', icon: arrow },
        { name: 'Works', url: '#', icon: arrow },
        { name: 'Career', url: '#', icon: arrow }
    ];

    // Contact details
    const contactDetails = [
        { type: 'phone', value: '+94 75 975 4189', icon: phone },
        { type: 'email', value: 'saravanaflora@gmail.com', icon: email },
        { type: 'address', value: 'No 692/37/6 K J Peris Mawatha, Pattiya Junction, Kelaniya', icon: location }
    ];

    // Gallery images
    const galleryImages = [
        { src: gallery1, alt: 'Gallery 1' },
        { src: gallery2, alt: 'Gallery 2' },
        { src: gallery3, alt: 'Gallery 3' },
        { src: gallery4, alt: 'Gallery 4' },
        { src: gallery5, alt: 'Gallery 5' },
        { src: gallery6, alt: 'Gallery 6' }
    ];

    return (
        <footer className="footer bg-[var(--color-dark)] text-white">
            <div className="container mx-auto px-4 py-10 sm:pt-16 lg:pt-24">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt="Company Logo"
                        />
                        <p className="mt-4 text-base leading-relaxed text-gray-400 text-center sm:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores autem commodi doloremque fugiat itaque magnam molestiae mollitia quod repellendus?
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.name}
                                    className="flex items-center justify-center text-[#117748] bg-white rounded-full w-8 h-8 hover:bg-green-100 transition-colors duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col ml-7 items-center sm:items-start">
                        <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="flex items-center text-base text-white hover:text-green-400 transition-colors duration-200"
                                    >
                                        <img src={link.icon} className="w-4 h-4 mr-2" alt="" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col -ml-5 items-center sm:items-start">
                        <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                            Contact Details
                        </h3>
                        <ul className="space-y-3">
                            {contactDetails.map((contact, index) => (
                                <li key={index} className="flex items-start max-w-xs">
                                    <img src={contact.icon} className="w-4 h-4 mt-1 mr-2 flex-shrink-0" alt="" />
                                    <span className="text-base text-white transition-colors duration-200">
                    {contact.value}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
                        <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                            Gallery
                        </h3>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {galleryImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition-opacity duration-200"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © Copyright {new Date().getFullYear()}, All Rights Reserved by{' '}
                        <span className="text-[var(--color-secondary)] font-bold">Soft Detroits</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;