import React, { Suspense, useState } from "react";
import flower1 from '../../assets/images/gallery1.jpg';
import flower2 from '../../assets/images/gallery2.jpg';
import flower3 from '../../assets/images/gallery3.jpg';
import flower4 from '../../assets/images/gallery4.jpg';
import {ProductInterface} from "../../models/Product.tsx";

const ProductDetails:React.FC<ProductInterface> = ({ tittle, category,unit_price, coverImageLink,stock,description}) => {
    const [selectedImage, setSelectedImage] = useState(flower1);
    const [quantity, setQuantity] = useState(1);


    const basePrice = unit_price; // LKR per bouquet
    const totalPrice = basePrice * quantity;

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="container mx-auto px-4 my-8 max-w-7xl">
            <h2 className="text-2xl font-bold mb-4 ">Product Details</h2>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Flower Images */}
                <div className="md:sticky md:top-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4">
                        <img
                            src={selectedImage}
                            className="w-full h-auto max-h-[300px] object-contain mx-auto rounded-lg"
                            alt="Selected Flower"
                        />
                    </div>
                    <div className="flex justify-center flex-wrap gap-3">
                        {[flower1, flower2, flower3, flower4].map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === img ? 'border-green-500' : 'border-gray-200'}`}
                            >
                                <img
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt={`Flower ${idx + 1}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="md:mt-5 text-2xl md:text-3xl font-bold text-gray-900 mb-3">{tittle}
                        Bouquet</h1>
                    <div className="flex items-center gap-3 mb-4">
                        <span
                            className="bg-pink-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Seasonal</span>
                        <span
                            className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Eco-Friendly</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-lg">{category}</div>
                        <span className="mx-2 text-gray-300">•</span>
                        {stock ? (
                            <span className="text-green-600 text-sm font-medium">In Stock</span>
                        ) : (
                            <span className="text-rose-600 text-sm font-medium">Out of Stock</span>
                        )}
                    </div>

                    {/* Quantity & Price */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex border border-gray-300 rounded-lg w-32 h-12">
                                <button
                                    className="flex-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors disabled:opacity-50"
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={!stock}
                                >
                                    −
                                </button>
                                <div
                                    className="w-12 text-center flex items-center justify-center border-x border-gray-300">
                                    {quantity}
                                </div>
                                <button
                                    className="flex-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors disabled:opacity-50"
                                    onClick={() => handleQuantityChange(1)}
                                    disabled={!stock}
                                >
                                    +
                                </button>
                            </div>

                            <div className="text-lg font-semibold text-gray-800">
                                Total: Rs. {totalPrice.toLocaleString()}
                            </div>
                        </div>

                        <button
                            className="bg-yellow-600 text-white h-12 px-6 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!stock}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            {stock ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-16 border-t border-gray-300 pt-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 tracking-wide underline">Description</h3>
                <Suspense
                    fallback={
                        <div className="animate-pulse space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    }
                >
                    <div className="prose prose-lg prose-gray max-w-none bg-white p-6 rounded-xl shadow-md">
                        <p className="leading-relaxed text-gray-700">
                            {description}
                        </p>
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default ProductDetails;