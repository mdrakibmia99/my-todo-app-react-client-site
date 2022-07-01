import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-white z-20'>
            <div className='container mx-auto'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                    TO-DO APPS
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <span>{open ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i>} </span>
                    
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

                    <li className='md:ml-8 text-xl md:my-0 mb-7'>
                        <Link to="completeTask" className='text-black hover:text-indigo-600 duration-300'>complete Task</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="myTask" className='text-black hover:text-indigo-600 duration-300'>My Task</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="todoList" className='text-black hover:text-indigo-600 duration-300'>Todo List</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="calender" className='text-black hover:text-indigo-600 duration-300'>Calender</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
};

export default Header;