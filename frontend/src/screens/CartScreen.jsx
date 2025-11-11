import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions'; 
import {TrashIcon} from '@heroicons/react/24/solid'

function CartScreen() {
  const { id: productId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = Number(new URLSearchParams(location.search).get('quantity')) || 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const checkoutHandler = ( ) =>{
    navigate('/login?redirect=shipping')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="w-full md:w-2/3">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">
              Your cart is empty. <Link to="/" className="text-blue-600">Go Back</Link>
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.product} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <Link to={`/product/${item.product}`} className="font-semibold text-lg">{item.name} (Donated/Used)</Link>
                  <p className="text-gray-600">Ksh {item.price}</p>
                </div>
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={item.quantity}
                  onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  ))}
                </select>
                {/* Remove Button with removeFromCart functionality */}
                <button
                  className="ml-4 text-red-500 hover:text-red-700 text-lg"
                  onClick={() => dispatch(removeFromCart(item.product))}
                >
                  <TrashIcon className="w-6 h-6 text-red-700 cursor-pointer" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p className="flex justify-between text-gray-700">
            <span>Subtotal:</span> 
            <span>Ksh {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
          </p>
          
          <p className="flex justify-between text-gray-700">
            <span>Tax Estimate:</span> 
            <span>Ksh {(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.08).toFixed(2)}</span>
          </p>
          <h3 className="flex justify-between text-lg font-semibold mt-4">
            <span>Order Total:</span> 
            <span>Ksh {((cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5) * 1.08).toFixed(2)}</span>
          </h3>
          <button 
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            disabled={cartItems.length === 0} onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
