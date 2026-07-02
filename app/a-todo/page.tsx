"use client"
import React, { useState, useEffect } from 'react'
import { Todo } from "@/types/a-todo"
import TodoForm from "./TodoForm";
import TodoStats from "./TodoStats";
import TodoItem from "./TodoItem"
import {useTodoStore} from '@/lib/todo-store';

const page = () => {
  const todos = useTodoStore((state) => state.todos)
  // const todos = [
  //   {
  //     id: 1,
  //     text: "Learn Zustand",
  //     completed: false,
  //     createdAt: new Date("2024-01-01"),
  //   },
  //   {
  //     id: 2,
  //     text: "Learn Zustand",
  //     completed: true,
  //     createdAt: new Date("2024-01-01"),
  //   },
  // ]
  return (
    <section className='container min-h-[80vh] px-2 md:px-4 lg:px-8 py-4'>
      <div className='max-w-6xl mx-auto'>

        <h1 className='text-3xl font-bold text-center mb-4'>Todo APP</h1>
        <TodoForm />
        <TodoStats />
        <div className='space-y-2'>
            {todos.length === 0 ? (
              <p className='text-center text-gray-500'>No Todos</p>
            ) : (
              todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
            )}
        </div>
      </div>
    </section>
  )
}

export default page
