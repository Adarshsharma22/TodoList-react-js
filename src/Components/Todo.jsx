import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="flex items-center justify-between bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl mb-3 transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/10 group">
        
        {/* Task Text with Interactive States */}
        <p 
          className={`flex-1 cursor-pointer text-lg font-medium transition-all duration-300 ${
            task.completed 
            ? "text-slate-500 line-through decoration-indigo-500/40 italic" 
            : "text-slate-100 hover:text-indigo-300"
          }`} 
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 ml-4 opacity-70 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => editTodo(task.id)}
            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all"
            aria-label="Edit task"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          
          <button 
            onClick={() => deleteTodo(task.id)}
            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            aria-label="Delete task"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
    </div>
  )
}