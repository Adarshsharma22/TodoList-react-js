import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim()) {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    /* Background with a more refined mesh-style gradient */
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 flex justify-center items-start pt-16 px-4">
      
      {/* Container with enhanced glassmorphism effects */}
      <div className="w-full max-w-md bg-slate-950/60 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-500">
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
            What’s on your list today?
          </h1>
          <h4 className="text-indigo-400 font-medium uppercase tracking-[0.2em] text-xs mt-3 opacity-80">
            Focus • Finish • Repeat
          </h4>
        </header>

        <TodoForm addTodo={addTodo} />
        
        {/* List container with improved spacing and empty state */}
        <div className="mt-10 space-y-4">
          {todos.length === 0 ? (
            <div className="flex flex-col items-center py-10 opacity-40">
              
              <p className="text-slate-100 text-sm font-light">No tasks yet. Add one above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                {todo.isEditing ? (
                  <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                  <Todo
                    task={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};