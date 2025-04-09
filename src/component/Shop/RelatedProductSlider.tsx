import { useState, useEffect } from "react";
import FlowerCard from "./FlowerCard.tsx";
import {ProductInterface} from "../../models/Product.tsx";
import CategoryCard from "../BaseHome/CategoryCard.tsx";


const RelatedProductSlider = ({ productList }: { productList: ProductInterface[] }) => {
    const [relatedProductList, setRelatedProductList] = useState<Array<ProductInterface>>([]);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4); // Default number of visible items



    useEffect(() => {
        setRelatedProductList(productList);
    }, [productList]); // Now this will update the list whenever productList changes


    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [relatedProductList]);

    const goToNext = () => {
        setCurrentStartIndex((prev) => {
            if (prev >= relatedProductList.length - visibleItems) {
                return 0;
            }
            return prev + 1;
        });
    };

    const goToPrevious = () => {
        setCurrentStartIndex((prev) => {
            if (prev === 0) {
                return relatedProductList.length - visibleItems;
            }
            return prev - 1;
        });
    };

    const getItemsVisible = () => {
        if (window.innerWidth >= 2500) {
            return 6;
        }
        if (window.innerWidth >= 1900) {
            return 5;
        } else if (window.innerWidth >= 1024) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1; // Adjusted for mobile view
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setVisibleItems(getItemsVisible());
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call on mount to set initial value
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const extendedProducts = [...relatedProductList, ...relatedProductList.slice(0, visibleItems)];

    const translateXValue = -(currentStartIndex * (100 / visibleItems));


    return (
        <div className="mt-20 ">
            <div className="mt-10 screen CategorySlider relative w-full mx-auto !h-auto mb-20">
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(${translateXValue}%)`,
                            transition: "transform 1s ease-in-out",
                        }}
                    >
                        {extendedProducts
                            .filter((item) => item && item.tittle !== "Unselected")
                            .map((item, index) => (
                                <div
                                    key={index}
                                    style={{width: `${100 / visibleItems}%`}}
                                    className="flex-shrink-0 flex justify-center items-center"
                                >
                                    <CategoryCard imageUrl={item.coverImageLink} itemName={item.tittle}/>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <button
                        onClick={goToPrevious}
                        className="bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        &#8592;
                    </button>
                </div>
                <div
                    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <button
                        onClick={goToNext}
                        className="bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>

    );
};

export default RelatedProductSlider;