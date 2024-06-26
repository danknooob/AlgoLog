import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      } else {
        setLoading(false);
        setError(null);
        navigate('/sign-in');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-2 rounded-md"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-2 rounded-md"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-2 rounded-md"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 text-white p-2 rounded-md transition-opacity ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
          }`}
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="mt-4">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
      <OAuth />
    </div>
  );
}
