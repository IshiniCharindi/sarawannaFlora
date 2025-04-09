import { lazy, Suspense, useState } from "react";

const Details = lazy(() => import("../component/Details"));

const FlowerProductDetailView = () => {
    const [selectedImage, setSelectedImage] = useState("bouquet_red");
    const [selectedColor, setSelectedColor] = useState("red");
    const [quantity, setQuantity] = useState(1);
    const [selectedArrangement, setSelectedArrangement] = useState("standard");

    const colorOptions = [
        { name: "red", display: "Red Roses", hex: "#dc2626" },
        { name: "pink", display: "Pink Peonies", hex: "#ec4899" },
        { name: "white", display: "White Lilies", hex: "#f3f4f6" },
        { name: "yellow", display: "Sunflowers", hex: "#facc15" },
        { name: "purple", display: "Lavender", hex: "#9333ea" },
        { name: "mixed", display: "Rainbow Mix", hex: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" }
    ];

    const arrangementOptions = [
        { id: "standard", name: "Standard Bouquet", price: 49.99 },
        { id: "deluxe", name: "Deluxe Arrangement", price: 79.99 },
        { id: "premium", name: "Premium Vase", price: 129.99 }
    ];

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const currentPrice = arrangementOptions.find(a => a.id === selectedArrangement)?.price || 49.99;

    return (
        <div className="container mx-auto px-4 my-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Flower Images */}
                <div className="sticky top-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4">
                        <img
                            src={`https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`}
                            className="w-full h-auto max-h-[500px] object-contain mx-auto rounded-lg"
                            alt="Beautiful Flower Bouquet"
                        />
                    </div>
                    <div className="flex justify-center flex-wrap gap-3">
                        {["bouquet_red", "bouquet_pink", "bouquet_white", "bouquet_mixed"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedImage(type)}
                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === type ? 'border-green-500' : 'border-gray-200'}`}
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80`}
                                    className="w-full h-full object-cover"
                                    alt={`Flower ${type}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Spring Blossom Flower Bouquet</h1>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-pink-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Seasonal</span>
                        <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Eco-Friendly</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 text-lg">
                           category
                        </div>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-green-600 text-sm font-medium">In Stock</span>
                    </div>

                    <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-900 mr-3">${currentPrice.toFixed(2)}</span>
                        <del className="text-lg text-gray-500 mr-3">${(currentPrice * 1.2).toFixed(2)}</del>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-1 rounded-full">Special Offer</span>
                    </div>
                    

                    {/* Quantity & Actions */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex border border-gray-300 rounded-lg w-32 h-12">
                                <button
                                    className="flex-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                                    onClick={() => handleQuantityChange(-1)}
                                >
                                    −
                                </button>
                                <div className="w-12 text-center flex items-center justify-center border-x border-gray-300">
                                    {quantity}
                                </div>
                                <button
                                    className="flex-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="flex-1 bg-green-600 text-white h-12 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                        <button className="w-full bg-pink-500 text-white h-12 px-6 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 mb-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Buy Now
                        </button>
                    </div>

                    {/* Product Highlights */}
                    <div className="mb-8 border-t border-gray-200 pt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Bouquet Details</h3>
                        <ul className="space-y-2">
                            {[
                                "Hand-arranged by expert florists",
                                "Fresh seasonal flowers sourced daily",
                                "Includes roses, peonies, and seasonal greens",
                                "Eco-friendly wrapping and packaging",
                                "Vase not included (available as upgrade)",
                                "Expected vase life: 7-10 days with proper care"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-green-50 rounded-lg p-4 mb-8">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <h4 className="font-medium text-green-800 mb-1">Same-Day Delivery Available</h4>
                                <p className="text-sm text-green-700 mb-2">
                                    Order before 2pm for same-day delivery in most areas. Additional $9.99 delivery fee.
                                </p>
                                <button className="text-sm text-green-600 font-medium hover:underline">
                                    Check delivery availability in your area
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lazy Loaded Details Section */}
            <div className="mt-16 border-t border-gray-200 pt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Care Instructions & Details</h3>
                <Suspense fallback={
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                }>
                    <div className="prose max-w-none">
                        <Details />
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default FlowerProductDetailView;