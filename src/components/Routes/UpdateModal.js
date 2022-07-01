import React from 'react';

const UpdateModal = ({task,setTask}) => {
    const handleUpdateTask =(event)=>{
        event.preventDefault();
        const updateTask = event.target.updateTask.value;
        console.log(updateTask);
        setTask(null);

    }
    return (
        <div>
            <input type="checkbox" id="updateTaskModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="updateTaskModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                     <form onSubmit={handleUpdateTask}>
                        <h2 className='text-3xl font-bold text-indigo-600 mb-5'>Update Your Task!</h2>
                        <input name='updateTask' type="text" value={task.desc} className="input input-bordered border-indigo-600 w-full max-w-xs"/>
                        <input type="submit" value="Update Task" />
                     </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;