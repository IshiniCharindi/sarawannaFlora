import { useState, useEffect } from "react";
import sliderImage01 from "../../assets/images/sliderImage01.jpg";
import sliderImage02 from "../../assets/images/sliderImage02.jpg";
import sliderImage03 from "../../assets/images/sliderImage03.jpg";
import sliderImage04 from "../../assets/images/sliderImage04.jpg";
import  '../../styles/AboutUsWelcomeSection.css'

const images = [sliderImage01, sliderImage02, sliderImage03, sliderImage04];

const AboutImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextIndex = () => (currentIndex + 1) % images.length;
    const getPrevIndex = () =>
        (currentIndex - 1 + images.length) % images.length;

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="aboutImageSlider relative w-[80%] h-[250px] md:h-[300px] ">
            <div className="w-full h-full rounded-lg shadow-lg overflow-hidden relative">
                <img
                    src={images[currentIndex]}
                    alt={`Our Team ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition duration-500 animate-zoom"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button
                        onClick={() => setCurrentIndex(getPrevIndex())}
                        className="btn text-white btn-circle opacity-70 hover:opacity-100 hover:cursor-pointer"
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => setCurrentIndex(getNextIndex())}
                        className="btn text-white btn-circle opacity-70 hover:opacity-100 hover:cursor-pointer"
                    >
                        ❯
                    </button>
                </div>
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index
                                ? "bg-gray-800"
                                : "bg-gray-400"
                        } hover:bg-gray-600 transition-colors`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutImageSlider;
