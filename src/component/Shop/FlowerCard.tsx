import React from "react";
import {ShoppingCart, Eye} from "lucide-react";
import {Link} from "react-router-dom";

interface FlowerCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
}

const FlowerCard: React.FC<FlowerCardProps> = ({id, name, category, price, imageUrl}) => {

    return (
        <div
            className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Flower+Image";
                    }}
                />
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-1000 ease-in-out transform origin-bottom scale-y-0 group-hover:scale-y-100"></div>

                {/* Hover Icons */}
                <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700">
                        <ShoppingCart size={20}/>
                    </button>

                    <Link to={`/product/details/${id}?category=${category}`}>
                        <button className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700">
                            <Eye size={20}/>
                        </button>
                    </Link>

                </div>
            </div>
            <div className="p-4 flex flex-col items-center bg-white">
                <h3 className="text-base font-bold text-black mb-1 text-center tracking-wide">
                    {name}
                </h3>
                <div className="text-gray-800 text-base">
                    <span className="font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-md shadow-sm">
                      Rs. {price.toLocaleString()}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default FlowerCard;
