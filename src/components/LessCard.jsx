import React from 'react';

function LessCard({ item, onClick }) {
  return (
    <div className='mt-5 sm:mt-6 sm:ml-0 md:mt-7 lg:mt-8 sm:text-center  md:mx-0  lg:mx-1 p-2 sm:p-3 md:p-4 lg:p-5'>
      <div className='card w-full sm:w-[450px] md:w-[350px] lg:w-[500px] h-[75px] md:h-[60px] lg:h-[60px] relative shadow-xl bg-gray-300 text-black border dark:border-gray-800'>
        <div className='card-body flex flex-col justify-between h-full s p-3 md:mr-10 sm:p-4 md:p-3 lg:px-5 lg:py-2 '>
          <h1 className='card-title text-lg sm:text-base md:text-xl lg:text-2xl font-semibold break-words max-w-full'>
            {item.tittle}
          </h1>
          <div className='absolute top-2 right-2 mt-8 lg:mt-2 md:mt-2'>
            <button 
              className='text-white bg-pink-500 px-3 py-1  rounded-lg hover:bg-pink-700 hover:scale-105 duration-200'
              onClick={onClick}
            >
              Start Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessCard;
