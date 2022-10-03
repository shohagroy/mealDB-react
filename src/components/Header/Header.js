import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='relative bg-red-400 flex justify-between py-3 px-10 items-center'>
            <img src="" alt="Logo-HTML" />

            {
                toggle ? 
                <span className='md:hidden cursor-pointer' onClick={()=> setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span> : 

                <span className='md:hidden cursor-pointer' onClick={()=> setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            }
            <ul className={`md:flex absolute justify-center md:static top-[5vh] ${toggle ? 'top-[10vh]' : 'top-[-200px]'} left-[45%] md:w-auto w-[100vh]`}>
                <li className='p-2'><Link to='/'>Home</Link></li>
                <li className='p-2'><Link to='/service'>Service</Link></li>
                <li className='p-2'><Link to='/product'>Product</Link></li>
                <li className='p-2'><Link to='/contact'>Contact</Link></li>
                <li className='p-2'><Link to='/about'>About</Link></li>
            </ul>
            
        </nav>
    );
};

export default Header;