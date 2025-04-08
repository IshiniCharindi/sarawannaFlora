import sliderImage01 from "../assets/images/sliderImage01.jpg"
import sliderImage02 from "../assets/images/sliderImage02.jpg"
import sliderImage03 from "../assets/images/sliderImage03.jpg"
import sliderImage04 from "../assets/images/sliderImage04.jpg"

const images = [sliderImage01, sliderImage02, sliderImage03, sliderImage04];

const AboutImageSlider = () => {
    return (
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px]">
            <div className="carousel w-full h-full rounded-lg shadow-lg">
                {images.map((img, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full h-full"
                    >
                        <img
                            src={img}
                            alt={`Our Team ${index + 1}`}
                            className="w-auto h-full max-w-full object-contain mx-auto"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide${(index - 1 + images.length) % images.length + 1}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${(index + 1) % images.length + 1}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutImageSlider;
