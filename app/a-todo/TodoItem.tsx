"use client"

import { Todo } from '@/types/a-todo'
import React, { useEffect, useState } from 'react'
import { useTodoStore } from '@/lib/todo-store';


const TodoItem = ({ todo }: { todo: Todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const updateTodo = useTodoStore((state) => state.updateTodo)
  const [editText, setEditText] = useState(todo.text)

  const [isEditing, setIsEditing] = useState(false)

  const handleSaveEdit = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  }

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  }
  return (
    <div className={`flex items-center gap-3 p-3 broder rounded-lg text-black
    ${todo.completed
        ? "bg-gray-50 border-gray-200"
        : "bg-white border-gray-300"
      }`}>
      {/* checkbox */}
      <input
        onClick={() => toggleTodo(todo.id)}
        type="checkbox" className='w-5 h-5 text-blue-600' defaultChecked={todo.completed} />
      {/* text */}
      <div className="flex-1">
        {isEditing ? (
          <input type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
            className='w-full px-2 py-1 border rounded'
            autoFocus
          />
        ) : (
          <span className={`${todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}>
            {todo.text}
          </span>
        )}


      </div>

      {/* action button */}
      <div className="flex gap-1">
        {isEditing ? (
          <>
          <button
            // onClick={()=> updateTodo(todo.id, )}
            onClick={handleSaveEdit}
            className='p-1 text-blue-600 hover:bg-blue-100'>✅</button>
          <button
            onClick={handleCancelEdit}
            className='p-1 text-red-600 hover:bg-red-100'>❌</button>
        </>
        ) : (
          <>
          <button
            // onClick={()=> updateTodo(todo.id, )}
            onClick={() => setIsEditing(true)}
            className='p-1 text-blue-600 hover:bg-blue-100'>📝</button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className='p-1 text-red-600 hover:bg-red-100'>🗑️</button>
        </>
        )}
        
      </div>
    </div>
  )
}

export default TodoItem
