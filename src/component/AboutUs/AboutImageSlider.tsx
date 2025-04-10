import { useState, useEffect } from "react";
import sliderImage01 from "../../assets/images/sliderImage01.jpg";
import sliderImage02 from "../../assets/images/sliderImage02.jpg";
import sliderImage03 from "../../assets/images/sliderImage03.jpg";
import sliderImage04 from "../../assets/images/sliderImage04.jpg";
import '../../styles/AboutUsWelcomeSection.css';

const images = [sliderImage01, sliderImage02, sliderImage03, sliderImage04];

const AboutImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextIndex = () => (currentIndex + 1) % images.length;
    const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(getNextIndex());
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]); // Added currentIndex to dependencies to avoid stale closures

    return (
        <div className="aboutImageSlider mt-5 relative w-[90%] h-[300px]  max-w-4xl mx-auto  sm:h-[200px] sm:mb-10  md:mb-10 md:h-[250px] lg:h-[310px] px-4">
            <div className="sliderImage w-full h-[90%] rounded-lg shadow-lg overflow-hidden relative group sm:mb-10 md:h-full lg:h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Our Team ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}

                {/* Navigation arrows */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <button
                        onClick={() => setCurrentIndex(getPrevIndex())}
                        className="btn bg-black bg-opacity-30 text-white text-xl p-2 rounded-full opacity-0 group-hover:opacity-70 hover:opacity-100 hover:cursor-pointer transition-all duration-300 sm:opacity-70"
                        aria-label="Previous slide"
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => setCurrentIndex(getNextIndex())}
                        className="btn bg-black bg-opacity-30 text-white text-xl p-2 rounded-full opacity-0 group-hover:opacity-70 hover:opacity-100 hover:cursor-pointer transition-all duration-300 sm:opacity-70"
                        aria-label="Next slide"
                    >
                        ❯
                    </button>
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center w-full py-2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            currentIndex === index
                                ? "bg-gray-800"
                                : "bg-gray-400"
                        } hover:bg-gray-600 transition-colors`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutImageSlider;