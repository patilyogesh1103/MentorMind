import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {

  const getTargetUrl = () => {
    console.log(`Item Name: ${item.name.toLowerCase()}`); // Debugging: Log the item name

    switch(item.name) {
      case "Human Geography":
        return "/geo";
      case "Stock Market":
        return "/stock";
      case "Histroy":
        return "/histroy";
      case "Programming":
        return "/programming";
      case "Meditation":
        return "/meditation";
      case "Science":
        return "/science";
      default:
        return "/";
    }
  };

  return (
    <div className='mt-7 my-3 p-3 '>
      <div className='card w-72 h-80  relative shadow-xl hover:scale-105 duration-200 bg-white text-black border dark:border-gray-800'>
        <div className='card-body flex flex-col justify-between h-full p-4'>
          <button className='absolute top-2 right-2 px-3 py-1 transform transition-transform duration-300 hover:scale-y-110 text-20px bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold text-black p-1 rounded-md'>
            {item.category}
          </button>
          <h2 className='card-title text-xl font-semibold'>{item.name}</h2>
          <p className='text-sm pt-4 text-gray-700'>{item.info}</p>
          <div className='text-center mt-4'>
            <Link to={getTargetUrl()}>
              <button className='text-white bg-pink-500 rounded-lg px-3 py-1 hover:bg-pink-700'>
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
