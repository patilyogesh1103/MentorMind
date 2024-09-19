import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>
      {/* Main content container */}
      <div className="text-black dark:text-white">
        <div className="text-center md:px-0 md:text-left pt-28 px-4 lg:px-20 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Education empowers minds to dream
            <br />
            <span className="text-pink-500">big and achieve greatness.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 lg:mt-10">
            Create a custom learning pathway to help you achieve more in school, work, and life.
          </p>
        </div>

        {/* Search bar container */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-12 px-4">
          <input
            id="text"
            placeholder="Search Here"
            className="px-4 py-2 rounded-md border border-gray-300 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto md:mx-0"
          />
          <button className="mt-4 md:mt-0 md:ml-4 bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm">
            Search
          </button>
        </div>

        {/* Popular Topics section */}
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-10 md:mt-14 px-4 md:px-8 lg:px-20 space-y-4 md:space-y-0 md:space-x-6">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-0">
            Popular Topics:
          </h1>
          <button className="text-sm md:text-base lg:text-lg hover:underline transition ease-in-out duration-150">
            Programming
          </button>
          <button className="text-sm md:text-base lg:text-lg hover:underline transition ease-in-out duration-150">
            Meditation
          </button>
          <button className="text-sm md:text-base lg:text-lg hover:underline transition ease-in-out duration-150">
            Science
          </button>
        </div>

        {/* Signup/Login message */}
        <div className="mt-8 px-4 md:mt-10 flex justify-center items-center">
          <p className="text-base md:text-lg lg:text-xl font-medium text-center underline">
            Please Signup or Login to access these Courses
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
