import { useState } from 'react';
import { ShoppingCart, Heart, X, Plus, Minus } from 'lucide-react';
import {CartInterface} from "../../models/Cart.tsx";


const IconCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartInterface[]>([
        {
            id: 1,
            tittle: 'Rose Bouquet',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
            inStock:true,
            quantity: 1,
        },
        {
            id: 2,
            tittle: 'Tulip Arrangement',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd',
            inStock:true,
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
        <div className="fixed bottom-6 right-6 z-50">
            {/* IconCart Button */}
            <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-4 bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
                <ShoppingCart className="text-white h-6 w-6" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
                )}
            </button>

            {/* IconCart Dropdown */}
            {isCartOpen && (
                <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 text-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Your Flower Cart</h2>
                            <button onClick={() => setIsCartOpen(false)}>
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <p className="text-sm opacity-90">{totalItems} item(s)</p>
                    </div>

                    {/* IconCart Items */}
                    <div className="max-h-96 overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <div className="p-6 text-center text-gray-500">
                                <Heart className="h-10 w-10 mx-auto mb-2 text-pink-200" />
                                <p>Your cart is empty</p>
                                <p className="text-sm">Add some beautiful flowers!</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-100">
                                {cartItems.map(item => (
                                    <li key={item.id} className="p-4">
                                        <div className="flex gap-4">
                                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                                                <img
                                                    src={item.image}
                                                    alt={item.tittle}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm font-medium text-gray-900">{item.tittle}</h3>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-400 hover:text-rose-500"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="mt-1 text-sm text-pink-600">${item.price.toFixed(2)}</p>
                                                <div className="mt-2 flex items-center">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-gray-500 hover:text-pink-600 p-1"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="mx-2 text-sm text-gray-700">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-gray-500 hover:text-pink-600 p-1"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* IconCart Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                <p>Subtotal</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <button
                                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 px-4 rounded-md font-medium transition duration-300"
                            >
                                Checkout
                            </button>
                            <p className="mt-2 text-center text-xs text-gray-500">
                                Free delivery on orders over $50
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default IconCart;