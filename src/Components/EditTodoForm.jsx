import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            editTodo(value, task.id); // Triggers the task update logic[cite: 5]
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-2 w-full animate-pulse-subtle"
        >
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className="flex-1 bg-slate-800/80 border-2 border-emerald-500/50 text-white text-sm rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 block w-full p-3 transition-all outline-none" 
                placeholder='Update task' 
                autoFocus // UX: Automatically focus the input when editing starts
            />
            <button 
                type="submit" 
                className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-emerald-900/20 active:scale-95 transition-all duration-200 whitespace-nowrap'
            >
                Update Task
            </button>
        </form>
    );
};