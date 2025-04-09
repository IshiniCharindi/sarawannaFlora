import React, { useState } from "react";
import FlowerCard from "./FlowerCard";
import ShopFilterSideBar from "./ShopFilterSideBar.tsx";

interface Product {
    id: number;
    name: string;
    rating: number;
    price: number;
    sold: number;
    region: string;
    category: string;
    imageUrl: string;
}

const ShopProductListing: React.FC = () => {
    // Sample product data
    const allProducts: Product[] = [
        {
            id: 1,
            name: "Red Roses Bouquet",
            rating: 4,
            price: 1200,
            sold: 93,
            region: "Western",
            category: "Fresh Flowers",
            imageUrl: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Lavender Arrangement",
            rating: 5,
            price: 1500,
            sold: 45,
            region: "Central",
            category: "Dried Flowers",
            imageUrl: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Mixed Seasonal Flowers",
            rating: 3,
            price: 1800,
            sold: 28,
            region: "Western",
            category: "Fresh Flowers",
            imageUrl: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Orchid Plant",
            rating: 4,
            price: 2500,
            sold: 67,
            region: "Eastern",
            category: "Plants",
            imageUrl: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            name: "Sunflower Bouquet",
            rating: 5,
            price: 1600,
            sold: 112,
            region: "Western",
            category: "Fresh Flowers",
            imageUrl: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            name: "Tulip Arrangement",
            rating: 4,
            price: 2200,
            sold: 34,
            region: "Central",
            category: "Fresh Flowers",
            imageUrl: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            name: "Succulent Set",
            rating: 5,
            price: 1900,
            sold: 89,
            region: "North Western",
            category: "Plants",
            imageUrl: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            name: "Dried Lavender Bundle",
            rating: 4,
            price: 1300,
            sold: 56,
            region: "Western",
            category: "Dried Flowers",
            imageUrl: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },

    ];

    // State management
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
    const [sortBy, setSortBy] = useState<string>("bestMatch");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 4;

    // Get unique categories
    const categories = Array.from(new Set(allProducts.map(product => product.category)));

    // Filter and sort products
    const filteredProducts = allProducts
        .filter(product => {
            const categoryMatch = selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);
            const priceMatch = product.price >= priceRange[0] &&
                product.price <= priceRange[1];
            return categoryMatch && priceMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "priceLowHigh": return a.price - b.price;
                case "priceHighLow": return b.price - a.price;
                case "bestSelling": return b.sold - a.sold;
                case "topRated": return b.rating - a.rating;
                default: return 0;
            }
        });

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Handler functions
    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
        setCurrentPage(1);
    };

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange([min, max]);
        setCurrentPage(1);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                    className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> Our
                    Products</h1>
                <div className="flex justify-center items-center">
                    <p className="text-center text-gray-400 relative inline-block leading-[3] tracking-[4px]">
                        what we offer
                        <span
                            className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                    </p>

                </div>
                <div>
                    <p className="text-gray-600">{filteredProducts.length} items found</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <ShopFilterSideBar
                    categories={categories}
                    selectedCategories={selectedCategories}
                    priceRange={priceRange}
                    onCategoryToggle={handleCategoryToggle}
                    onPriceChange={handlePriceChange}
                />

                <div className="flex-1">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                            <select
                                id="sort"
                                value={sortBy}
                                onChange={handleSortChange}
                                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value="bestMatch">Best Match</option>
                                <option value="priceLowHigh">Price: Low to High</option>
                                <option value="priceHighLow">Price: High to Low</option>
                                <option value="bestSelling">Best Selling</option>
                                <option value="topRated">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                        {currentProducts.map(product => (
                            <FlowerCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                rating={product.rating}
                                price={product.price}
                                sold={product.sold}
                                region={product.region}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav className="flex items-center space-x-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                                >
                                    Previous
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 rounded ${currentPage === page ? 'bg-green-700 text-white' : 'border border-gray-300'}`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopProductListing;