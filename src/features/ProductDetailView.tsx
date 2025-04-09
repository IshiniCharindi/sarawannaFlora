import { lazy, Suspense } from "react";

const Details = lazy(() => import("../component/Details"));

const ProductDetailView = () => {
    return (
        <div className="container mx-auto px-4 my-8">
            <div className="grid md:grid-cols-2 gap-8 border-2">
                {/* Product Images */}
                <div className="text-center">
                    <img
                        src="../assets/images/tshirt_red_480x400.webp"
                        className="w-full max-w-md mx-auto rounded shadow-sm mb-4"
                        alt="Product"
                    />
                    <div className="flex justify-center flex-wrap gap-2">
                        {["tshirt_grey", "tshirt_black", "tshirt_green"].map((color, idx) => (
                            <img
                                key={idx}
                                src={`../assets/images/${color}_480x400.webp`}
                                className="w-20 h-auto border border-gray-400 rounded cursor-pointer"
                                alt="thumbnail"
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Great product name goes here</h2>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">New</span>
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Hot</span>
                    </div>

                    <div className="text-yellow-400 text-sm mb-2">
                        {"★".repeat(4)}
                        <span className="text-gray-400">★</span>
                        <span className="text-gray-500 ml-2">42 ratings and 4 reviews</span>
                    </div>

                    <dl className="text-sm text-gray-700 mb-4">
                        <div className="flex">
                            <dt className="w-32 font-medium">Availability:</dt>
                            <dd>In stock</dd>
                        </div>
                        <div className="flex">
                            <dt className="w-32 font-medium">Sold by:</dt>
                            <dd>Authorised Store</dd>
                        </div>
                    </dl>

                    {/* Size Selector */}
                    <div className="mb-4">
                        <p className="font-semibold text-sm mb-1">Select Size</p>
                        <div className="flex flex-wrap gap-3">
                            {["S", "M", "L", "XL", "XXL"].map((size, idx) => (
                                <label key={idx} className="flex items-center gap-1 text-sm">
                                    <input
                                        type="radio"
                                        name="size"
                                        disabled={["S", "M"].includes(size)}
                                        className="form-radio accent-blue-600"
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Color Buttons */}
                    <div className="mb-4">
                        <p className="font-semibold text-sm mb-1">Select Color</p>
                        <div className="flex items-center gap-2">
                            {["blue", "gray", "green", "red", "yellow", "cyan", "black"].map((color, idx) => (
                                <button
                                    key={idx}
                                    className={`rounded-full w-8 h-8 border-2 border-gray-300`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Price Info */}
                    <div className="mb-4">
                        <span className="text-2xl font-bold text-gray-800 mr-3">$1900</span>
                        <del className="text-sm text-gray-500 mr-3">$2000</del>
                        <span className="bg-yellow-400 text-gray-900 text-xs font-medium px-2 py-1 rounded">Save $100</span>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="flex border rounded w-32 h-10">
                            <button className="flex-1 text-blue-600 hover:bg-blue-50">-</button>
                            <input
                                type="text"
                                className="w-12 text-center border-x outline-none"
                                defaultValue="1"
                            />
                            <button className="flex-1 text-blue-600 hover:bg-blue-50">+</button>
                        </div>
                        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                            <i className="bi bi-cart-plus mr-1"></i>Add to cart
                        </button>
                        <button className="bg-yellow-400 text-gray-900 text-sm px-4 py-2 rounded hover:bg-yellow-500">
                            <i className="bi bi-cart3 mr-1"></i>Buy now
                        </button>
                        <button className="border border-gray-400 text-gray-600 px-3 py-2 rounded hover:bg-gray-100">
                            <i className="bi bi-heart-fill"></i>
                        </button>
                    </div>

                    {/* Product Highlights */}
                    <div className="mb-6">
                        <p className="font-semibold text-sm mb-2">Product Highlights</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                            <li>Cras consequat felis ut vulputate porttitor.</li>
                        </ul>
                    </div>


                </div>
                {/* Lazy Loaded Details Section */}
                <div className="mt-10 border-2 w-full">
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">More Product Details</h3>
                    <Suspense fallback={<p className="text-sm text-gray-500">Loading details...</p>}>
                        <div className="prose prose-sm max-w-none">
                            <Details />
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailView;
