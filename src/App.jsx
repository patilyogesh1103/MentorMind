import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Courses from './components/Courses';
import FreeCourses from './components/FreeCourses';
import Geo from './AllCourses/Geo';
import Stock from './AllCourses/Stock';
import Histroy from './AllCourses/Histroy';
import Programnig from './AllCourses/Programnig';
import Meditation from './AllCourses/Meditation';
import Science from './AllCourses/Science';
import Login from './components/Login';
// import { useAuth } from './Context/AuthProvider';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';

function App() {
  // const { authUser, setAuthUser } = useAuth(); // Destructuring the values from useAuth
  // console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white bg-white  min-h-screen text-black">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='course' element={ <Courses />} />
        <Route path='freecourses' element={<FreeCourses />} />
        <Route path='/geo' element={<Geo />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/histroy' element={<Histroy />} />
        <Route path='/programming' element={<Programnig />} />
        <Route path='/meditation' element={<Meditation />} />
        <Route path='/science' element={<Science />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
