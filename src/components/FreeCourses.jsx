import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios";
import Courses from './Courses';
import Footer from './Footer';
import Navbar from './Navbar';

function FreeCourses() {

    const[mentor,setMentor]= useState([]);
    useEffect(()=>{
        const getMentor=async ()=>{
            try{
                const res =await axios.get("http://localhost:4001/mentor");
                console.log(res.data);
                const freeCourses=res.data.filter(course => course.category==="Free")
                setMentor(freeCourses)
            }
            catch(error){
                console.log("Error",error);
            }
        }
        getMentor();
    },[]);

  return (
    <>
    <Navbar/>
    <div className='text-black bg-white dark:text-white dark:bg-slate-900'>
    <div className='text-4xl text-left pl-12 pt-40'>Free Online Offered 
    <span className='text-pink-500'> Courses : </span>
    <p className='text-xl mt-8'>Unlock your potential with free courses, learn anytime, anywhere, at no cost</p>
     </div>

    <div className='pt-10 md:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-80 gap-y-6 gap-x-4 max-w-screen-lg mx-auto'>
    {mentor.length>0 ?(
        mentor.map((item)=>(
            <Card key={item.id} item={item}/>
        ))
    ):(
        <p>No Courses Available.</p>
    )
    }
    </div>
     </div>
     <Footer/>
    </> 
 )
}

export default FreeCourses