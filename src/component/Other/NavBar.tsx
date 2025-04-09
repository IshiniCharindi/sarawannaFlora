import React, { useState } from "react";
import cart from "../../assets/icons/cart.png";
import login from "../../assets/icons/login.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="bg-[var(--color-primary)] fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-14 lg:h-17">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex">
                            <img
                                className="h-8"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Toggle button for mobile */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white hover:bg-gray-800 rounded-md"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // close icon
                                            : "M4 6h16M4 12h16m-7 6h7" // hamburger
                                    }
                                />
                            </svg>
                        </button>
                        <Link to="/product/details/cart">
                            <img src={cart} alt="Cart" className="w-5 h-5"/>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex space-x-10 text-white">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/shop"}>Shop</Link>
                        <Link to={"/Aboutus"}>About Us</Link>
                        <Link to={"/contactus"}>Contact US</Link>

                    </div>

                    {/* Desktop Icons */}
                    <div className="hidden lg:flex space-x-4">
                        <Link to="/product/details/cart">
                            <img src={cart} alt="Cart" className="w-5 h-5"/>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden px-4 py-6 bg-[var(--color-secondary)] text-white space-y-4 shadow-md">
                    <div className="flex flex-col space-y-4 items-center justify-center">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/shop"}>Shop</Link>
                        <Link to={"/Aboutus"}>About Us</Link>
                        <Link to={"/contactus"}>Contact US</Link>
                    </div>
                </div>
            )}
        </header>

    );
};

export default NavBar;
