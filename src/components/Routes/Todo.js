import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Todo = ({ task ,setTask}) => {
    const { desc, _id ,check} = task;
    const [checked,setChecked]=useState(false)

    const handleDeleteList = (id) => {
        axios.delete(`http://localhost:5000/task/${id}`)
            .then(res => {
                console.log(res);
                toast('item deleted');
            })



    }
    const handleChecked=async()=>{
        const { data } = await axios.put(`http://localhost:5000/task/${_id}`, { check: checked ? 'yes' : 'no' });
        console.log(data);

    }
    
    return (
        <div className="flex justify-between w-full border-2 border-black py-3 my-3 px-3">
            <div className='flex'>
                <input type="checkbox" checked={check === "yes"} onClick={()=>{handleChecked();setChecked(!checked)}} name="checkbox" id="checkbox" className='w-5 mr-3' />
                <p className={`lg:text-3xl md:text-3xl text-sm checked ${(check==="yes")? "line-through":""}`}> {desc.slice(0,35)}</p>
                
            </div>
            <div  className='w-24'>
           
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