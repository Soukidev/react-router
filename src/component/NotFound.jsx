// 404Page.js
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Oops!
        </h1>
        <p className="text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          The page you're looking for doesn't exist.
        </p>
        <div className="relative mb-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-12 h-12 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.403 2.095a2.002 2.002 0 01-2.293.388L15 17zm-6 0H4l1.403 2.095a2.002 2.002 0 002.293.388L9 17z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5l18 14M3 5l7 14h4l7-14"
              />
            </svg>
          </div>
          <h2 className="text-xl text-yellow-400 animate__animated animate__fadeIn animate__delay-3s">
            It seems like you've taken a wrong turn 🚧
          </h2>
        </div>
        <Link
          to="/"
          className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full text-xl hover:bg-yellow-500 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
