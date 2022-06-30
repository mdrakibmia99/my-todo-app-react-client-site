import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                    </span>
                    TO-Do APPS
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <span>{open ? <i className="fa-solid fa-xmark"></i> : 'menu'} </span>
                    
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

                    <li className='md:ml-8 text-xl md:my-0 mb-7'>
                        <Link to="completeTask" className='text-gray-800 hover:text-gray-400 duration-500'>complete Task</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="myTask" className='text-gray-800 hover:text-gray-400 duration-500'>My Task</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="todoList" className='text-gray-800 hover:text-gray-400 duration-500'>Todo List</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="calender" className='text-gray-800 hover:text-gray-400 duration-500'>Calender</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;