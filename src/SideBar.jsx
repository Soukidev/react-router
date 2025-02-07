// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h1 className="text-2xl font-bold mb-4">
        <Link to={"/"}>Car Brands</Link>
      </h1>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/ford" className="hover:text-gray-400">
              Ford
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/bmw" className="hover:text-gray-400">
              BMW
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/tesla" className="hover:text-gray-400">
              Tesla
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/mercedes" className="hover:text-gray-400">
              Mercedes G-Class
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dacia" className="hover:text-gray-400">
              Dacia
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
