import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Cart",
      link: "/cart",
      icon: ShoppingCartIcon,
    },
    {
      name: "Login",
      link: "/login",
      icon: UserIcon,
    },
  ];

  return (
    <nav className="w-full bg-gray-800 shadow-md relative">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* Logo */}
            <Link to="/" className="text-3xl text-white font-semibold tracking-wider">
              JShop
            </Link>
            {/* Toggle button */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon className="w-6 h-6 text-white" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {Navbar.map((item, index) => (
                <li key={index} className="text-white">
                  <Link
                    href={item.link}
                    className="flex items-center text-gray-200 hover:text-gray-400 text-[1.15rem] font-medium tracking-wider"
                    onClick={() => setNavbar(false)}
                  >
                    <item.icon className="h-6 w-6 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

