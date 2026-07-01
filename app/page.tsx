import React from 'react'
import Hero from '@/components/dashboard/Hero';
import About from '@/components/dashboard/About';


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
    </main>
  )
}

export default Home
