import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Settings() {
  const [username, setUsername] = useState('John Doe');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [handles, setHandles] = useState({
    gfg: '',
    codeforces: '',
    codechef: '',
    leetcode: '',
  });

  const handleAppearanceToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDeleteUser = () => {
    // Handle user deletion logic here
    console.log('User deleted');
  };

  const handleSignOut = () => {
    // Handle sign-out logic here
    console.log('User signed out');
  };

  const handleHandleChange = (e) => {
    const { name, value } = e.target;
    setHandles((prevHandles) => ({ ...prevHandles, [name]: value }));
  };

  return (
    <>
      <div className="container mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white">Settings</h2>
    
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Change Profile Photo</label>
          {profilePic && <img src={profilePic} alt="Profile" className="mt-4 w-24 h-24 rounded-full shadow-md mb-4" />}
          <input type="file" onChange={handleProfilePicChange} className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>



        <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Appearance</label>
        <button
          onClick={handleAppearanceToggle}
          className="px-4 py-2 text-black rounded shadow hover:bg-grey-700 transition duration-200 flex items-center"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2 h-10" />
        </button>
      </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Change Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">GFG Handle</label>
          <input
            type="text"
            name="gfg"
            value={handles.gfg}
            onChange={handleHandleChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Codeforces Handle</label>
          <input
            type="text"
            name="codeforces"
            value={handles.codeforces}
            onChange={handleHandleChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Codechef Handle</label>
          <input
            type="text"
            name="codechef"
            value={handles.codechef}
            onChange={handleHandleChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Leetcode Handle</label>
          <input
            type="text"
            name="leetcode"
            value={handles.leetcode}
            onChange={handleHandleChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <button
            onClick={handleDeleteUser}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-700 transition duration-200"
          >
            Delete User
          </button>
        </div>

        <div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-700 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
