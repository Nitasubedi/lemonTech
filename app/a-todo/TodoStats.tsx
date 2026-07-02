"use client"

import React, { useState, useEffect } from 'react'
import {useTodoStore} from '@/lib/todo-store';

const TodoStats = () => {
  const getTodoStats = useTodoStore((state) => state.getTodoStats)
  const stats = getTodoStats()

    // const stats = {
    //     total: 10,
    //     active: 20,
    //     completed: 2,
    // }

    // for hidration error
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
      setMounted(true)
    }, [])

    if(!mounted){
      return <div className='mb-4 text-gray-500'>Loading...</div>
    }
  return (
    <div className='text-center py-4'>
      <div className='inline-flex items-center gap-4'>
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>✅Completed: {stats.completed}</span>
      </div>
    </div>
  )
}

export default TodoStats
