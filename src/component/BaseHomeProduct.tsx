import React from "react";

interface FlowerCardProps {
    name: string;
    rating: number;
    price: string;
    timeRange: string;
    imageUrl: string;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ name, rating, price, timeRange, imageUrl }) => {
    const stars = Array(5).fill(0).map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
    ));

    return (
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-67 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Flower+Image";
                    }}
                />
            </div>
            <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
                <div className="mb-2">{stars}</div>
                <div className="text-gray-700">
                    <span className="font-bold">${price}</span> {timeRange}
                </div>
            </div>
        </div>
    );
};

const BaseHomeProduct: React.FC = () => {
    const flowers = [
        {
            name: "Red Roses",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Lavender",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Miniature Roses",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Floribunda",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Red Roses",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Lavender",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Miniature Roses",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Floribunda",
            rating: 5,
            price: "12.00",
            timeRange: "15:00",
            imageUrl: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
    ];

    return (
        <div className="my-10 ">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                {flowers.map((flower, index) => (
                    <FlowerCard
                        key={index}
                        name={flower.name}
                        rating={flower.rating}
                        price={flower.price}
                        timeRange={flower.timeRange}
                        imageUrl={flower.imageUrl}
                    />
                ))}
            </div>
        </div>

    )
        ;
};

export default BaseHomeProduct;