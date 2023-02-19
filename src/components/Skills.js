import React from "react";
import css from '../assets/css.png'
import html from '../assets/html-5.png'
import js from '../assets/js.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit  text-zinc-50 scroll-area mb-32'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-fit'>
        <div  className=' p-4 sticky top-[110px] bg-oliveGreen w-screen'>
            <p className='text-4xl font-bold inline border-b-4 border-lemon' >Experience</p>
            <p className='py-4 text-lg'> These are the technologies I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 p-4 '>
          <div className='shadow-md shadow-zinc-800 hover:scale-110 duration-500 bg-lemon rounded-md'>
            <img className='w-20 mx-auto p-1 pt-4' src={html} alt='react' />
            <p className='my-4'>HTML</p>
          </div>   
          <div className='shadow-md shadow-zinc-800 hover:scale-110 duration-500 bg-lemon rounded-md'>
            <img className='w-20 mx-auto  p-1 pt-4' src={js} alt='react' />
            <p className='my-4'>JavaScript</p>
          </div>   <div className='shadow-md shadow-zinc-800 hover:scale-110 duration-500 bg-lemon rounded-md'>
            <img className='w-20 mx-auto  p-1 pt-4' src={css} alt='react' />
            <p className='my-4'>CSS</p>
          </div>   <div className='shadow-md shadow-zinc-800 hover:scale-110 duration-500 bg-lemon rounded-md'>
            <img className='w-20 mx-auto  p-1 pt-4' src={react} alt='react' />
            <p className='my-4'>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills