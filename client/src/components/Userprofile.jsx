// UserProfile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  const [handles, setHandles] = useState({
    gfg: '',
    leetcode: '',
    codechef: '',
    codeforces: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHandles((prevHandles) => ({
      ...prevHandles,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/handles/userhandle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(handles),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      } else {
        setLoading(false);
        setError(null);
        navigate('/profile');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="gfg" className="block text-gray-700">
              GFG Handle
            </label>
            <input
              type="text"
              id="gfg"
              name="gfg"
              value={handles.gfg}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your GFG handle"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="leetcode" className="block text-gray-700">
              LeetCode Handle
            </label>
            <input
              type="text"
              id="leetcode"
              name="leetcode"
              value={handles.leetcode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your LeetCode handle"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="codechef" className="block text-gray-700">
              CodeChef Handle
            </label>
            <input
              type="text"
              id="codechef"
              name="codechef"
              value={handles.codechef}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your CodeChef handle"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="codechef" className="block text-gray-700">
              Codeforces Handle
            </label>
            <input
              type="text"
              id="codeforces"
              name="codeforces"
              value={handles.codeforces}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your Codeforces handle"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Save Handles'}
          </button>
        </form>
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
        <p className="mt-4 text-center">
          <Link to="/profile" className="text-blue-500 hover:underline">
            Back to Profile
          </Link>
        </p>
      </div>
    </div>
  );
}
