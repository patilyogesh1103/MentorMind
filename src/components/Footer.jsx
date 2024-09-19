import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import the correct icons
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=''>
      <footer className="text-black bg-white dark:bg-slate-900 dark:text-white footer footer-center border-t mt-20 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
        <Link to="/freecourses" className="link link-hover ">Free Online Courses</Link>
          <Link to="/about" className="link link-hover ">About us</Link>
          {/* <button className="link link-hover ">Contact</button> */}
          
        </nav>
        <nav className="flex gap-4">
        <div className='flex  items-center justify-center space-x-4'>
          <a
            href="https://www.linkedin.com/in/yogesh-patil-38144a278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100073708000923&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaInstagram size={24} />
          </a>
          </div>
        </nav>
        <aside>
          <p className="">Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
