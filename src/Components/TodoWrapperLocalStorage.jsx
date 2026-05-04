import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState([]);

    // Initialize state from localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        if (!todo.trim()) return; // Simple UX: prevent empty tasks
        const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div className="min-h-screen py-12 px-4 flex justify-cente">
            
            <div className='max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20'>
                
                <header className='mb-8 text-center'>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-500 to-red-500 ">
                        What’s on your list today?
                    </h1>
                    <h4 className="text-blue-300 font-medium uppercase tracking-[0.2em] text-xs mt-3 opacity-80">
                        Focus • Finish • Repeat
                    </h4>
                </header>

                <TodoForm addTodo={addTodo} />

                
                <div className='mt-8 space-y-4'>
                    {todos.length === 0 ? (
                        <div className='text-center py-10'>
                            <p className='text-slate-300 italic'>Your list is empty. Start by adding a task!</p>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <div 
                                key={todo.id} 
                                className='transition-all duration-300 transform hover:scale-[1.02]'
                            >
                                {todo.isEditing ? (
                                    <EditTodoForm editTodo={editTask} task={todo} />
                                ) : (
                                    <Todo 
                                        task={todo} 
                                        toggleComplete={toggleComplete} 
                                        deleteTodo={deleteTodo} 
                                        editTodo={editTodo} 
                                    />
                                )}
                            </div>
                        ))
                    )}
                </div>

                
                {todos.length > 0 && (
                    <div className='mt-8 pt-6 border-t border-white/10 flex justify-between text-sm text-slate-400'>
                        <span>Total: {todos.length}</span>
                        <span>Completed: {todos.filter(t => t.completed).length}</span>
                    </div>
                )}
            </div>
        </div>
    )
}