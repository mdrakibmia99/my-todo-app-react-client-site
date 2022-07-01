import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import UpdateModal from './UpdateModal';

const CompleteTask = () => {
    const [checkedTask,setCheckedTask]=useState([])
    const [task,setTask]=useState(null);
    useEffect(() => {
        const url = `https://degrassi-toonie-63722.herokuapp.com/checkedTask`;
        const getLists = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setCheckedTask(response);

        };
        getLists();
    }, [checkedTask]);
    return (
        <div className='flex w-full  lg:w-1/2 mx-auto px-10 mt-20'>
                <div className='w-full'>
                    {
                        checkedTask?.map((checkTask) =><Todo
                        key={checkTask._id}
                        task={checkTask}
                        setTask={setTask}
                      
                        >

                        </Todo>)
                    }
                </div>
                {task && <UpdateModal task={task} setTask={setTask}></UpdateModal>}
            </div>
    );
};

export default CompleteTask;