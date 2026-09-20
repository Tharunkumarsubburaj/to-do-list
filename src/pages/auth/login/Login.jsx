import { useState, useEffect, useCallback } from 'react'
import { taskAPI } from '../../../api/service';

export default function Login() {

  const [ taskValue, setTaskValue ] = useState("");
  const [ listItems, setListItems ] = useState(() => {
    const savedItems = localStorage.getItem('todoItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addTask = useCallback(async () => {
    try {
        const result = await taskAPI.create({ task: taskValue });
        console.log("Task Data", result);
    } catch (error) {
        console.error("Error on creating the task:", error);
    }
  }, [taskValue]);

  useEffect(() => {
    addTask();
    localStorage.setItem('todoItems', JSON.stringify(listItems));
  }, [addTask, listItems]);

  function handleChange(e) {
    setTaskValue(e.target.value);
  }

  function addElement(e) {
    e.preventDefault();
    addTask();
    if (taskValue.trim()) {
      setListItems([...listItems, taskValue]);
      setTaskValue("");
    }
  }

  function deleteElement(index) {
    const newList = listItems.filter((item, i) => i !== index);
    setListItems(newList);
  }

  return (
    <>
      <div className='min-h-screen w-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'>
        <div className='flex flex-col justify-center items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-2xl shadow-2xl hover:shadow-green-500/10 transition-all duration-300'>
          <h1 className='text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>To Do List</h1>
          
          <form className="userInput flex" onSubmit={addElement}>
            <input 
              type="text" 
              placeholder='Enter your task' 
              className='w-80 p-3 text-lg rounded-l-xl border-0 outline-none bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/50 transition-all duration-300 backdrop-blur-sm' 
              value={taskValue}
              onChange={handleChange}
            />
            <button className='px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-r-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/20'>
              Add
            </button>
          </form>

          <div className='w-full max-h-[60vh] overflow-y-auto custom-scrollbar'>
            <ul className='flex flex-col gap-4 min-w-[30rem]'>
              {listItems.map((item, index) => (
                <li key={index} 
                    className='animate-slideIn text-xl list-none'
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='flex justify-between items-center bg-gray-800/30 backdrop-blur-sm border border-white/5 p-5 rounded-xl w-full hover:bg-gray-700/30 transition-all duration-300 group'>
                    <span className='text-gray-100 font-medium break-words max-w-[70%]'>{item}</span>
                    <button 
                      onClick={() => deleteElement(index)} 
                      className='px-4 py-2 bg-red-600/80 hover:bg-red-500 rounded-lg text-white transition-all duration-300 opacity-60 group-hover:opacity-100 font-medium'
                    >
                      Delete
                    </button>
                  </div> 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
