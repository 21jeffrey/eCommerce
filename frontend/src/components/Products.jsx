import Review from './Review'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from './Loader'
  
  
  export default function Products() {
   const dispatch = useDispatch()
   const productList = useSelector((state) => state.productList)
   const {loading, error, products} = productList
    useEffect(() => {
      dispatch(listProducts())
    },[dispatch])

    
    return (
      <div className="bg-white">
          
      {loading && <Loader/>}
      {error && <h2>{error}</h2>}

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8  ">
          
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              
              <Link key={product._id} to={`/product/${product._id}`} className="group">
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 cursor-pointer"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                
                <Review value={product.rating} text={`${product.numReviews} reviews`}/>
                
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  