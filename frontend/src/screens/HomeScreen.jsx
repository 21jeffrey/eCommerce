import React, {useState, useEffect} from 'react'
import Products from '../components/Products'
import axios from 'axios'

const HomeScreen = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Latest Products</h2>
        <Products/>
    </div>
  )
}

export default HomeScreen