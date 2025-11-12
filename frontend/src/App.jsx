import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen'
import ShippingPolicyScreen from './screens/ShippingPolicyScreen'
import ContactScreen from './screens/ContactScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyScreen />} />
            <Route path='/shipping-policy' element={<ShippingPolicyScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />  
      </div>
    </Router>
  )
}

export default App
