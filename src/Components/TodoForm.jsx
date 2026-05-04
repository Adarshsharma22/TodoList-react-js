import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) { 
            addTodo(value);
            setValue(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className="flex-1 bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 transition-all placeholder-slate-500 outline-none" 
                placeholder='What is the task today?' 
                required
            />
            <button 
                type="submit" 
                className='bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 hover:from-amber-500 hover:via-rose-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 whitespace-nowrap'
            >
                Add Task
            </button>
        </form>
    );
};