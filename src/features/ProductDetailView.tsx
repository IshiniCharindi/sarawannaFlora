import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {ProductInterface} from "../models/Product.tsx";
import RelatedProductSlider from "../component/Shop/RelatedProductSlider.tsx";
import ProductDetails from "../component/Shop/ProductDetails.tsx";
import NavBar from "../component/Other/NavBar.tsx";
import Footer from "../component/Other/Footer.tsx";


const singleProduct = {
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
    rawImage: null,
};

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

const ProductDetailsView = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const [category, setCategory] = useState<string>("");
    // const [product, setProduct] = useState<ProductInterface | null>(null); // Product state can be null initially
    const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>([]); // Related products list

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryFromQuery = queryParams.get("category");
        setCategory(categoryFromQuery || "");
        //
        // if (id && categoryFromQuery) {
        //     fetch(`http://your-api-url.com/products/${id}`)
        //         .then(res => res.json())
        //         .then((data: Product) => setProduct(data))
        //         .catch(err => console.error("Error fetching product:", err));
        //
        //     fetch(`http://your-api-url.com/products?category=${categoryFromQuery}`)
        //         .then(res => res.json())
        //         .then((data: Product[]) => setRelatedProducts(data))
        //         .catch(err => console.error("Error fetching related products:", err));
        // }

        setRelatedProducts(allProducts)
    }, [id, location.search]);

    return (
        <div className="mt-20">
            <NavBar/>
            {singleProduct ? (
               <ProductDetails product_id={singleProduct.product_id}
                               stock={singleProduct.stock}
                               unit_price={singleProduct.unit_price}
                               tittle={singleProduct.tittle}
                               category={singleProduct.category}
                               coverImageLink={singleProduct.coverImageLink}
                               description={singleProduct.description}
               />
            ) : (
                <p>Loading product details...</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RelatedProductSlider category={category} productList={relatedProducts}/>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetailsView;
