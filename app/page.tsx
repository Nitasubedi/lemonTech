import React from 'react'
import Hero from '@/components/dashboard/Hero';
import About from '@/components/dashboard/About';
import Testimonials from '@/components/dashboard/Testimonials';


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Testimonials />

    </main>
  )
}

export default Home
