import React from 'react';

const TodoList = () => {
    const todolist=[
        {
            id:1,
            title:"ajke amar mon valo nei ",

        },
        {
            id:2,
            title:"ajke amar mon valo nei 2"
        },
        {
            id:3,
            title:"ajke amar mon valo nei 3"
        },
    ]
    return (
     <div>
          <div className='mt-40'>
        <div className='flex w-full md:w-1/2 lg:w-1/2 mx-auto px-10'>
            <input type="text"  className='w-full border-indigo-600 form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder="Search" aria-label="Search"/>
            <input type="button" value="Add"  className='bg-indigo-600 px-5 py-2 text-white'/>
        </div>
       </div>
           <div className='flex w-full md:w-1/2 lg:w-1/2 mx-auto px-10 mt-16'>
             <div>
             {
                todolist.map((todo)=> <div key={todo.id} className="flex  border-2 bg-indigo-300">
                       <input type="checkbox" name="checkbox" id="checkbox" />
                         <p > {todo.title}</p>
                         <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                         <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>

                </div>)
             }
             </div>
           </div>
     </div>
    );
};

export default TodoList;