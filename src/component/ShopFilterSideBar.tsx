import React from "react";

interface FilterSidebarProps {
    categories: string[];
    selectedCategories: string[];
    priceRange: [number, number];
    onCategoryToggle: (category: string) => void;
    onPriceChange: (min: number, max: number) => void;
}

const ShopFilterSideBar: React.FC<FilterSidebarProps> = ({
                                                             categories,
                                                             selectedCategories,
                                                             priceRange,
                                                             onCategoryToggle,
                                                             onPriceChange
                                                         }) => {
    return (
        <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
                {/* Categories Filter */}
                <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Categories</h3>
                    <ul className="space-y-2">
                        {categories.map(category => (
                            <li key={category}>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => onCategoryToggle(category)}
                                        className="rounded text-green-500 focus:ring-green-400"
                                    />
                                    <span>{category}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Filter */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Price Range</h3>
                    <div className="mb-2 space-y-4">
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={priceRange[0]}
                            onChange={(e) => onPriceChange(Number(e.target.value), priceRange[1])}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-700"
                        />
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={priceRange[1]}
                            onChange={(e) => onPriceChange(priceRange[0], Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-700"
                        />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Rs. {priceRange[0].toLocaleString()}</span>
                        <span>Rs. {priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopFilterSideBar;