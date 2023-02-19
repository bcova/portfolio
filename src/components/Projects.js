import React from "react";
import fit from '../assets/Fit.png'
import tictac from '../assets/tictac.png'
import project from '../assets/code.jpg'

const Projects = () => {
  return (
    <div name='projects' className= 'w-full md:h-screen text-zinc-50 scroll-area'>
         <div className='p-4 sticky top-[100px] bg-oliveGreen'>
             <p className='text-4xl font-bold inline border-b-4 text-zinc-50 border-lemon'>Projects</p>
             <p className='py-4'>Check out some of my recent projects</p>
         </div>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-md text-center'>
          <div  style={{backgroundImage:`url(${fit})`}}
           className='shadow-md shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-zinc-50'>
                Fitness Tracker
               </span>
               <div className='pt-8 text-center'>
                  <a href='https://fluffy-fox-3f6929.netlify.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon text-zinc-50 font-bold text-lg border-2 '>Website</button>
                  </a>     
                  <a href='https://github.com/GioHiCar/FitnessTrackr_FE'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon text-zinc-50 font-bold text-lg border-2'>Code</button>
                  </a>
               </div>
            </div>
          </div>
          <div  style={{backgroundImage:`url(${tictac})`}}
           className='shadow-md shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-zinc-50'>
                 Tic-Tac-Toe
               </span>
               <div className='pt-8 text-center'>
                  <a href='https://frabjous-bavarois-909bfa.netlify.app/'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon text-zinc-50 font-bold text-lg border-2'>Website</button>
                  </a>     
                  <a href='https://github.com/bcova/Tic-Tac-Toe'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon text-zinc-50 font-bold text-lg border-2'>Code</button>
                  </a>
               </div>
            </div>
          </div>
          <div  style={{backgroundImage:`url(${project})`}}
           className='shadow-md shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-zinc-50'>
                 Standard Project
               </span>
               <div className='pt-8 text-center'>
                  <a href='/'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon   text-zinc-50 font-bold text-lg border-2'>Test 1</button>
                  </a>     
                  <a href='/'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 hover:bg-lemon hover:border-lemon   text-zinc-50 font-bold text-lg border-2'>Test 2</button>
                  </a>
               </div>
            </div>
          </div>
        </div>

       </div>
    </div>
  )
}




export default Projects
