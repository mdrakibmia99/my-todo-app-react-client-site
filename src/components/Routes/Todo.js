import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Todo = ({ task ,setTask}) => {
    const { desc, _id } = task;

    const handleDeleteList = (id) => {
        axios.delete(`http://localhost:5000/task/${id}`)
            .then(res => {
                console.log(res);
                toast('item deleted');
            })



    }
    
    return (
        <div className="flex justify-between w-full border-2 border-black py-3 my-3 px-3">
            <div className='flex'>
                <input type="checkbox" name="checkbox" id="checkbox" className='w-5 mr-3' />
                <p className='text-3xl'> {desc}</p>
                
            </div>
            <div >
           
                <label for="updateTaskModal" className='mr-4' onClick={()=>setTask(task)}>
                    <i class="fa fa-pencil-square-o text-3xl text-indigo-600" aria-hidden="true" ></i>
                </label>
                <button onClick={() => handleDeleteList(_id)}>
                    <i class="fa fa-trash-o text-3xl text-red-600" aria-hidden="true"></i>
                </button>
            </div>


        </div >
    );
};

export default Todo;