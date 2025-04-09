function CategoryCard(props: any) {
    return (
        <div
            className={`${props.class} itemCard bg-white shadow-md rounded-lg text-center relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 mx-2`}
            style={{ width: '100vw', maxWidth: '260px' ,height:'320px'}}
        >
            <img
                src={props.imageUrl}
                alt="productImage"
                className={`rounded-t-lg w-full h-[250px] object-cover transition-transform duration-1000 ease-in-out transform hover:scale-110`}
                style={{ objectFit: 'cover' }}
            />
            <div className="bg-gray-100 p-4">
                <p className="text-gray-500 text-xs mb-2">{props.category}</p>
                <h3 className="text-sm font-semibold text-gray-800 mb-4 truncate">
                    {props.itemName}
                </h3>
            </div>
        </div>
    );
}

export default CategoryCard;
