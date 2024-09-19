import React from 'react';

function QuizCard({ quiz, onClick }) {
  return (
    <>
      <div className='mt-5 sm:mt-6 sm:ml-0 md:mt-7 lg:mt-8 mx-3 sm:mx-4 md:mx-6 lg:mx-8 p-2 sm:p-3 md:p-4 lg:p-5'>
        <div className='card lg:w-[450px] lg:h-full sm:w-[250px] md:w-[600px] h-auto md:h-20 relative shadow-xl bg-gray-300 text-black border dark:border-gray-800'>
          <div className='card-body flex flex-col justify-between h-full p-3 sm:p-4 md:p-5 lg:p-6'>
            <h2 className='text-xl font-bold'>{quiz.quizTitle}</h2>

            {/* Loop through questions */}
            {quiz.questions.map((question) => (
              <div key={question.id} className='mt-4'>
                <p className='font-semibold'>{question.question}</p>
                <ul className='mt-2 list-disc pl-5'>
                  {question.options.map((option, index) => (
                    <li key={index} className='pl-3'>
                      <input type='radio' name={`question-${question.id}`} id={`option-${option}`} />
                      <label htmlFor={`option-${option}`} className='ml-2'>{option}</label>
                    </li>
                  ))}
                </ul>
                <p className='mt-2 italic text-gray-600'>Correct Answer: {question.correctAnswer}</p>
              </div>
            ))}

            <button className='text-xl text-white rounded-lg px-3 py-1 bg-pink-500 mt-4' onClick={onClick}>
              Try Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizCard;
