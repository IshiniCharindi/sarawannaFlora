import { useState } from 'react';
import { ShoppingCart, Heart, X, Plus, Minus } from 'lucide-react';
import {Link} from "react-router-dom";
import NavBar from "../Other/NavBar.tsx";

type FlowerItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

const IconCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<FlowerItem[]>([
        {
            id: 1,
            name: 'Rose Bouquet',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Tulip Arrangement',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd',
            quantity: 2,
        },
    ]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <div>
            <NavBar/>

        </div>

    );
};

export default IconCart;