import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const { authUser, setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null); // Clear the authUser state
      localStorage.removeItem('Users'); // Remove user from local storage
      toast.success('Logout Successful');
      setTimeout(() => {
        window.location.reload(); // Reload page to update navbar
      }, 1500);
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
