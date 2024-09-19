import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import LessCard from '../components/LessCard';

const Stock=({progress}) => {
  const [lesson, setLesson] = useState([]);  // Store all lessons
  const [selectedLesson, setSelectedLesson] = useState(null);  // Store the selected lesson

  useEffect(() => {
    const getLesson = async () => {
      try {
        const res = await axios.get("http://localhost:4001/lesson");
        const proglesson = res.data.filter(lesson => lesson.category === "stock");
        setLesson(proglesson);
        console.log("Fetched Lessons:", proglesson); // Debug log
      } catch (error) {
        console.log("Error", error);
      }
    };
    getLesson();
  }, []);

  const handleLessonClick = (item) => {
    setSelectedLesson(item);
    console.log("Selected Lesson:", item); // Debug log
  };

  return (
    <>
      <div className='pt-10 px-4 md:px-10 lg:px-20 text-black bg-white dark:text-white dark:bg-slate-900'>
        <h1 className='text-left text-xl pt-20 md:text-3xl lg:text-4xl'>Learn Stocks</h1>

        {/* Full-width progress bar */}
        <div className="w-[350px] h-3 md:w-full mt-6 md:mt-8 bg-gray-300 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 flex items-center w-full">
            <div
              className="h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
            {progress}%
          </span>
        </div>
        <p className='mt-2 md:mt-4 text-sm md:text-md'>Module Progress</p>

        {/* Flex container for lesson cards and selected lesson info */}
        <div className='flex flex-col md:flex-row md:ml-0 mt-6 md:mt-8'>
          {/* Left half of the page: List of lessons */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            {
              lesson.length > 0 ? (
                lesson.map((item) => (
                  <div key={item.id} className='mb-4'>
                    <LessCard
                      item={item}
                      onClick={() => handleLessonClick(item)}  // Pass onClick handler for lessons
                    />
                  </div>
                ))
              ) : (
                <p className='text-center'>No lessons available</p>
              )
            }
          </div>

          {/* Right half of the page: Display the selected lesson's info */}
          <div className='w-[350px] md:w-[350px] lg:w-1/2 lg:ml-5 p-4 md:p-4 lg:mt-12 ml-0 md:ml-5 bg-gray-300 text-black mt-6 md:mt-0 rounded-lg'>
            {selectedLesson ? (
              <>
                <h2 className='text-xl md:text-3xl lg:text-3xl  lg:text-black lg:mt-4 font-bold'>{selectedLesson.tittle}</h2>
                <p className='mt-2 md:mt-5'>{selectedLesson.info}</p>
              </>
            ) : (
              <div>
                <p className='text-lg md:text-xl'>Click on a Start Lesson to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default Stock