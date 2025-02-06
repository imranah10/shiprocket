import React from "react";
import Logo from "../../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex bg-white p-4 w-full">
      <ul className="flex gap-4 w-full items-center">
        <li>
          <Link to="/">
            <img src={Logo} alt="Shiprocket Logo" className="w-40" />
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/platform">Platform</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
        <li>
          <Link to="/trackorder">Track Order</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/quick" className="text-blue-500">
            Quick
          </Link>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-full" aria-label="Log In">
          Log In
        </button>
        <button className="border w-24 p-2 bg-blue-600 rounded-full text-white" aria-label="Try for free">
          Try for free
        </button>
      </div>
    </nav>
  );
}

export default Header;
