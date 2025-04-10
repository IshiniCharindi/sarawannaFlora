import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, X, Plus, Minus, ShoppingCart } from 'lucide-react';
import {useState} from "react";
import {CartInterface} from "../../models/Cart.tsx";


const CartContent = () => {
    const [cartItems, setCartItems] = useState<CartInterface[]>([
        {
            id: 1,
            tittle: 'Premium Rose Bouquet',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
            quantity: 1,
            inStock: true,
        },
        {
            id: 2,
            tittle: 'Spring Tulip Arrangement',
            price: 34.99,
            image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd',
            quantity: 2,
            inStock: true,
        },
        {
            id: 3,
            tittle: 'Luxury Orchid Plant',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1517848568502-d03fa74e1964',
            quantity: 1,
            inStock: false,
        },
    ]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shippingFee + tax;

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

    const saveForLater = (id: number) => {
        // Implement save for later functionality
        console.log(`Saved item ${id} for later`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        {totalItems} {totalItems === 1 ? 'item' : 'items'}
                    </div>
                </div>

                {/* Back to shopping link */}
                <Link
                    to="/shop"
                    className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-secondary)] mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                </Link>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="divide-y divide-gray-200">
                                {cartItems.length === 0 ? (
                                    <div className="p-12 text-center">
                                        <ShoppingCart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Start adding some beautiful flowers to your cart!
                                        </p>
                                        <Link
                                            to="/flowers"
                                            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
                                        >
                                            Browse Flowers
                                        </Link>
                                    </div>
                                ) : (
                                    cartItems.map(item => (
                                        <div key={item.id} className="p-4 sm:p-6">
                                            <div className="flex flex-col sm:flex-row">
                                                <div className="flex-shrink-0 mb-4 sm:mb-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.tittle}
                                                        className="w-32 h-32 rounded-lg object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-0 sm:ml-6 flex-1">
                                                    <div className="flex justify-between">
                                                        <h3 className="text-lg font-medium text-gray-900">{item.tittle}</h3>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-gray-400 hover:text-rose-500"
                                                        >
                                                            <X className="h-5 w-5" />
                                                        </button>
                                                    </div>

                                                    {!item.inStock && (
                                                        <p className="mt-1 text-sm text-rose-600">Out of Stock</p>
                                                    )}

                                                    <p className="mt-1 text-lg font-medium text-[var(--color-primary)]">
                                                        ${item.price.toFixed(2)}
                                                    </p>

                                                    <div className="mt-4 flex items-center">
                                                        <div className="flex items-center border border-gray-300 rounded-md">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                disabled={item.quantity <= 1}
                                                                className={`px-3 py-1 ${item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600 hover:text-pink-600'}`}
                                                            >
                                                                <Minus className="h-4 w-4" />
                                                            </button>
                                                            <span className="px-3 py-1 text-sm text-gray-700">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-3 py-1 text-gray-600 hover:text-pink-600"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>

                                                        <button
                                                            onClick={() => saveForLater(item.id)}
                                                            className="ml-4 text-sm text-gray-500 hover:text-pink-600 flex items-center"
                                                        >
                                                            <Heart className="h-4 w-4 mr-1" />
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-8 lg:mt-0 lg:col-span-4">
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Subtotal</span>
                                        <span className="text-sm font-medium text-gray-900">
                                          ${subtotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Shipping</span>
                                        <span className="text-sm font-medium text-gray-900">
                      {shippingFee === 0 ? (
                          <span className="text-green-600">Free</span>
                      ) : (
                          `$${shippingFee.toFixed(2)}`
                      )}
                    </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Tax</span>
                                        <span className="text-sm font-medium text-gray-900">
                      ${tax.toFixed(2)}
                    </span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                                        <span className="text-base font-medium text-gray-900">Total</span>
                                        <span className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        disabled={cartItems.length === 0}
                                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${cartItems.length === 0 ? 'bg-[gray-300] cursor-not-allowed' : 'bg-black cursor-pointer hover:bg-black/91'}`}
                                    >
                                        Checkout
                                    </button>
                                </div>

                                {subtotal < 50 && shippingFee > 0 && (
                                    <p className="mt-4 text-center text-sm text-pink-600">
                                        Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                                    </p>
                                )}

                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        or{' '}
                                        <Link
                                            to="/flowers"
                                            className="text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                                        >
                                            Continue Shopping
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Support */}
                        <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-sm font-medium text-gray-900">Need Help?</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Our floral experts are available 24/7 to assist you with your order.
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm">
                                        <span className="font-medium">Email:</span> support@yourflowershop.com
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Phone:</span> (555) 123-4567
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContent;