import React from "react";

interface FlowerCardProps {
    id: number;
    name: string;
    rating: number;
    price: number;
    sold: number;
    // region: string;
    imageUrl: string;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ id, name, rating, price, sold, region, imageUrl }) => {
    const stars = Array(5).fill(0).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));

    return (
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Flower+Image";
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-1000 ease-in-out transform origin-bottom scale-y-0 group-hover:scale-y-100"></div>
            </div>
            <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
                <div className="mb-2 flex">{stars}</div>
                <div className="text-gray-700">
                    <span className="font-bold">Rs. {price.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                    {sold} sold {/*| {}*/}
                </div>
            </div>
        </div>
    );
};

export default FlowerCard;