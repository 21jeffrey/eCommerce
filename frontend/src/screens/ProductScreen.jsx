import React, { useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import {addToCart} from '../actions/cartActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductScreen = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const increaseQuantity = () => {
    if (quantity < product.countInStock) {
      setQuantity(quantity + 1)
    }
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  if (loading) return <Loader/>
  if (error) return <h2 className="text-red-600">{error}</h2>
  if (!product || Object.keys(product).length === 0) return <h2>Product not found</h2>


  const buyNowHandler = () => {
    navigate(`/cart/${product._id}?quantity=${quantity}`)
  }
  
  
  
  const addToCartHandler = () => {
      dispatch(addToCart(product._id, quantity)); 
      toast(`Added to Cart: ${product.name} (Quantity: ${quantity})`);
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="flex items-center text-gray-700 mb-4">
        <ArrowLeftIcon className="w-6 h-6 mr-2" />
        <span>Back to Home</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-gray-900 mt-4">${product.price}</p>
          <p className={`mt-2 ${product.countInStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="mt-2 text-yellow-500">⭐ {product.rating} / 5 ({product.numReviews} reviews)</p>
          {/* Quantity Selector */}
          {product.countInStock > 0 && (
            <div className="mt-4 flex items-center space-x-4">
              <span className="font-semibold">Quantity:</span>
              <button 
                onClick={decreaseQuantity} 
                className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border rounded-lg">{quantity}</span>
              <button 
                onClick={increaseQuantity} 
                className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={quantity >= product.countInStock}
              >
                +
              </button>
            </div>
          )}
          <div className="flex gap-4 mt-4">
            <button className={`px-4 py-2 rounded-lg text-white font-semibold ${product.countInStock > 0 ? 'bg-gray-800 hover:bg-gray-600' : 'bg-gray-400 cursor-not-allowed'}`} disabled={product.countInStock === 0} onClick={addToCartHandler}>
              <ShoppingCartIcon className="w-5 h-5 inline mr-2" />
              Add to Cart
            </button>
            {product.countInStock > 0 && (
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-lg" onClick={buyNowHandler}>
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
