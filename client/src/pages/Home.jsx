import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate();
  const onSubmit=()=>{
    navigate("/sign-up");

  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Platform!</h1>
        <p className="text-gray-600 mb-6">
          Discover amazing features and connect with people around the world. Join us today and start your journey!
        </p>
        <button onClick={onSubmit}className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
