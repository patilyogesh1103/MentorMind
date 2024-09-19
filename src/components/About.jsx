import React from 'react';

function About() {
  return (
    <>
      <div className='pt-20 px-4 md:px-10 lg:px-20'>
        <div className='pt-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-pink-500 underline'>
            About Us
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl pt-5 md:pt-10'>
            Learn more about MentorMind and our mission.
          </p>
        </div>
        <div className='pt-6 md:pt-9'>
          <p className='text-base sm:text-lg md:text-xl'>
            MentorMind is an online learning platform designed to bridge the gap
            between academic knowledge and practical skills. It offers hands-on,
            real-world projects, allowing learners to apply their skills in
            various industries. With expert mentorship, learners gain valuable
            feedback and guidance, making it ideal for career growth. MentorMind
            focuses on experiential learning, helping users enhance their
            problem-solving abilities and develop job-ready skills in fields
            like technology, business, and design.
          </p>
          <h1 className='text-2xl sm:text-3xl pt-12 md:pt-20'>Our Mission</h1>
          <p className='text-base sm:text-lg md:text-xl pt-5 md:pt-7'>
            MentorMind's mission is to empower learners by providing real-world,
            hands-on learning experiences that bridge the gap between education
            and industry. Through mentorship and practical projects, it aims to
            cultivate job-ready skills, foster problem-solving abilities, and
            prepare individuals for successful careers. The platform is
            dedicated to enabling experiential learning, ensuring that users
            gain valuable insights and industry-relevant expertise.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
