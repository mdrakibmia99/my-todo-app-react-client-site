import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import UpdateModal from './UpdateModal';

const TodoList = () => {
    
    const [tasks, setTasks] = useState([]);
    const [task,setTask]=useState(null);
  

    useEffect(() => {
        const url = `http://localhost:5000/task`;
        const getLists = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setTasks(response);

        };
        getLists();
    }, [tasks]);

     
    
    const handleAddTask = (event) => {
        event.preventDefault();
        const task_desc = event.target.task_desc.value;
        const list = { desc: task_desc,check:"no"}
        axios.post('http://localhost:5000/task', list)
            .then(res => (res.data));

            event.target.reset();


    }
    return (
        <div className=''>
            <div className='mt-40'>
                    <form className='flex w-full md:w-1/2 lg:w-1/2 mx-auto px-10' onSubmit={handleAddTask}>
                    <input type="text" name='task_desc' className='w-full border-indigo-600 form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder="Type Your Task" aria-label="Search" />
                    <input type="submit" value="Add" className='bg-indigo-600 px-5 py-2 text-white' />
                    </form>
    
            </div>
            <div className='flex w-full  lg:w-1/2 mx-auto px-10 mt-16'>
                <div className='w-full'>
                    {
                        tasks?.map((task) =><Todo
                        key={task._id}
                        task={task}
                        setTask={setTask}
                      
                        >

                        </Todo>)
                    }
                </div>
            </div>
            {task && <UpdateModal task={task} setTask={setTask}></UpdateModal>}
        </div>
    );
};

export default TodoList;