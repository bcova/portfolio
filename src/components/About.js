import React from "react";
import self from '../assets/self.jpg'

function About() {
  return (
    <div name='about' className='w-full h-screen text-zinc-50 scroll-area'>
      <div className='flex flex-col justify-center items-center w-full h-full pt-28'>
          <img className='w-48 rounded-full relative -top-16 shadow-md shadow-black -z-10' src={self} alt='selfie'/>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
           <div className='sm:text-right pb-8 pl-4'>
             <p className='text-4xl font-bold inline border-b-4 border-lemon'>About</p>
           </div>
           <div></div>
           </div>
           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-zinc-200'>
              <p> Hi. I'm Brandon, nice to meet you. Please take a look around!</p>
            </div>
            <div>
              <p className='text-zinc-200 text-lg'>I am an aspiring web developer based out of the Chicago metro area. I recently took on a 3-month (Jun '22 - Aug '22) intensive full-stack Boot-camp through Fullstack Academy. Since taking the course, I have continued to delve deep into coding. I spend my time writing code not only for the love of it but also to understand why certain things do what they do. I find it interesting to not only know how something works but also why. I am a creative individual at heart, as shown in my personal life. I am a self-taught drummer of 22 years, a self-taught photographer, and I dabble in music production. </p>
            </div>
           </div>
        </div>
    </div>
  )
}



export default About

