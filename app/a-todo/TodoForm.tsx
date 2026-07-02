import React, { useState } from 'react'
import {useTodoStore} from '@/lib/todo-store';

const TodoForm = () => {
    const [input, setInput] = useState("");

    const addTodo = useTodoStore((state) => state.addTodo)

    const handleSubmit = ()=>{
        console.log(input)
        if(input.trim()){
          addTodo(input)
          setInput("")
        }
    }
  return (
    <section className='flex gap-2'>
      <input 
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      placeholder='Add a new todo'
      type="text" required className='px-4 py-2 border rounded-lg flex-1' />
      <button
      onClick={handleSubmit}
      type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-lg'>+</button>
    </section>
  )
}

export default TodoForm
