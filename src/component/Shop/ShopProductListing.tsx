import React, { useState } from "react";
import FlowerCard from "./FlowerCard.tsx";
import ShopFilterSideBar from "./ShopFilterSideBar.tsx";
import { FiFilter, FiX } from "react-icons/fi";
import {ProductInterface} from "../../models/Product.tsx";


const ShopProductListing: React.FC = () => {

    const allProducts: ProductInterface[] = [
        {
            product_id: "1",
            tittle: "Red Roses Bouquet",
            stock: true,
            top_item: true,
            cat_id: "1", // You can assign appropriate category IDs
            description: "A beautiful bouquet of fresh red roses.",
            unit_price: 1200,
            category: "Fresh Flowers",
            unit_measured: "Bouquet",
            coverImageLink: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null, // Add image file or null if no image is provided yet
        },
        {
            product_id: "2",
            tittle: "Lavender Arrangement",
            stock: true,
            top_item: false,
            cat_id: "2",
            description: "A calming lavender arrangement perfect for any setting.",
            unit_price: 1500,
            category: "Dried Flowers",
            unit_measured: "Arrangement",
            coverImageLink: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "3",
            tittle: "Mixed Seasonal Flowers",
            stock: true,
            top_item: false,
            cat_id: "3",
            description: "A delightful mix of seasonal flowers to brighten your space.",
            unit_price: 1800,
            category: "Fresh Flowers",
            unit_measured: "Arrangement",
            coverImageLink: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "4",
            tittle: "Orchid Plant",
            stock: true,
            top_item: true,
            cat_id: "4",
            description: "A stunning orchid plant for a touch of elegance.",
            unit_price: 2500,
            category: "Plants",
            unit_measured: "Plant",
            coverImageLink: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "5",
            tittle: "Sunflower Bouquet",
            stock: true,
            top_item: true,
            cat_id: "1",
            description: "A bright and cheerful sunflower bouquet to bring warmth to any space.",
            unit_price: 1600,
            category: "Fresh Flowers",
            unit_measured: "Bouquet",
            coverImageLink: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "6",
            tittle: "Tulip Arrangement",
            stock: true,
            top_item: false,
            cat_id: "1",
            description: "A beautiful arrangement of fresh tulips.",
            unit_price: 2200,
            category: "Fresh Flowers",
            unit_measured: "Arrangement",
            coverImageLink: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "7",
            tittle: "Succulent Set",
            stock: true,
            top_item: true,
            cat_id: "5",
            description: "A set of cute succulents for your home or office.",
            unit_price: 1900,
            category: "Plants",
            unit_measured: "Set",
            coverImageLink: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        },
        {
            product_id: "8",
            tittle: "Dried Lavender Bundle",
            stock: true,
            top_item: false,
            cat_id: "2",
            description: "A bundle of dried lavender for a soothing aroma.",
            unit_price: 1300,
            category: "Dried Flowers",
            unit_measured: "Bundle",
            coverImageLink: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rawImage: null,
        }
    ];

    // State management
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
    const [sortBy, setSortBy] = useState<string>("bestMatch");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const productsPerPage = 4;

    // Get unique categories
    const categories = Array.from(new Set(allProducts.map(product => product.category)));

    // Filter and sort products
    const filteredProducts = allProducts
        .filter(product => {
            const categoryMatch = selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);
            const priceMatch = product.unit_price >= priceRange[0] &&
                product.unit_price <= priceRange[1];
            return categoryMatch && priceMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "priceLowHigh": return a.unit_price - b.unit_price;
                case "priceHighLow": return b.unit_price - a.unit_price;
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

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
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

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
                <button
                    onClick={toggleSidebar}
                    className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md"
                >
                    {isSidebarOpen ? <FiX size={20} /> : <FiFilter size={20} />}
                    {isSidebarOpen ? 'Close Filters' : 'Show Filters'}
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative">
                {/* Sidebar with mobile responsiveness */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40  bg-opacity-50 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <div
                    className={`fixed md:static inset-y-0 left-0 z-50 md:z-auto w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
                >
                    <ShopFilterSideBar
                        categories={categories}
                        selectedCategories={selectedCategories}
                        priceRange={priceRange}
                        onCategoryToggle={handleCategoryToggle}
                        onPriceChange={handlePriceChange}
                    />
                </div>

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
                                key={product.product_id}
                                id={product.product_id ?? "default-id"}
                                name={product.tittle}
                                category={product.category}
                                price={product.unit_price}
                                imageUrl={product.coverImageLink}
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