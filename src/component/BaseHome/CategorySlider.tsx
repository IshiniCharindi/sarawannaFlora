import { useState, useEffect } from "react";
import Category, { CategoryInterface } from "../../models/Category.tsx";
import CategoryCard from "./CategoryCard.tsx";

const manualCategories: Array<CategoryInterface> = [
    {
        categoryID: "fl001",
        name: "Roses",
        tags: "romantic, classic, anniversary",
        coverImageLink: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // or require('./assets/roses.jpg') for local images
    },
    {
        categoryID: "fl002",
        name: "Tulips",
        tags: "spring, elegant, fresh",
        coverImageLink: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        categoryID: "fl003",
        name: "Sunflowers",
        tags: "happy, summer, bright",
        coverImageLink: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        categoryID: "fl004",
        name: "Orchids",
        tags: "exotic, sophisticated, luxury",
        coverImageLink:"https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        categoryID: "fl005",
        name: "Lilies",
        tags: "elegant, fragrant, sympathy",
        coverImageLink:"https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        categoryID: "fl006",
        name: "Seasonal Bouquets",
        tags: "mixed, seasonal, special",
        coverImageLink:"https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },{

        categoryID: "fl007",
        name: "Seasonal Bouquets",
        tags: "mixed, seasonal, special",
        coverImageLink:"https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

const CategoryCarousel = () => {
    const [categoryList, setCategoryList] = useState<Array<CategoryInterface>>([]);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4); // Default number of visible items

    const loadCategories = async () => {
        // const res: Array<CategoryInterface> | boolean = await Category.fetchAllCategories();

        // if (res && typeof res !== "boolean") {
        //     setCategoryList(res);
        // } else {
        //     // Fallback to manual categories if API fails
        //     console.log("Using manual flower categories");
        // }
        setCategoryList(manualCategories);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [categoryList]);

    const goToNext = () => {
        setCurrentStartIndex((prev) => {
            if (prev >= categoryList.length - visibleItems) {
                return 0;
            }
            return prev + 1;
        });
    };

    const goToPrevious = () => {
        setCurrentStartIndex((prev) => {
            if (prev === 0) {
                return categoryList.length - visibleItems;
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

    const extendedCategories = [...categoryList, ...categoryList.slice(0, visibleItems)];

    const translateXValue = -(currentStartIndex * (100 / visibleItems));

    const classname = "transition-transform duration-[1000ms] ease-in-out hover:scale-110";

    return (
        <div className="mt-20 ">
            <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> Categories</h1>
            <div className="flex justify-center items-center">
                <p className="text-center text-gray-400 mb-5 relative inline-block leading-[3] tracking-[4px]">
                    Know about us
                    <span
                        className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <div className="mt-10 screen CategorySlider relative w-full mx-auto !h-auto mb-20">
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(${translateXValue}%)`,
                            transition: "transform 1s ease-in-out",
                        }}
                    >
                        {extendedCategories
                            .filter((item) => item && item.name !== "Unselected")
                            .map((item, index) => (
                                <div
                                    key={index}
                                    style={{width: `${100 / visibleItems}%`}}
                                    className="flex-shrink-0 flex justify-center items-center"
                                >
                                    <CategoryCard
                                        imageUrl={item.coverImageLink}
                                        itemName={item.name}
                                        className={classname}
                                    />
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

export default CategoryCarousel;