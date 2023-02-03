import React from "react";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 scroll-area'>
        <form method='POST' action='https://getform.io/f/8d6019f6-b493-46c2-895f-427e73583556' className='flex flex-col max-w-[600px] w-full pt-20 '>
            <div className='pb-8'>
                <p className='text-4x font-bold inline border-b-4 border-lemon text-zinc-50'>Contact</p>
                <p className='text-zinc-50 py-4 '> Submit the form below or shoot me an email - <a className="underline underline-offset-4 animate-pulse" href="mailto:  brandoncova@gmail.com"> brandoncovarrubias@gmail.com</a></p>
            </div>
            <input className='bg-zinc-100 p-2 rounded-md' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-zinc-100  rounded-md' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-zinc-100 p-2  rounded-md' name='message' rows='10' placeholder='Message' required ></textarea>
              <button className='text-zinc-50 border-2 hover:bg-lemon hover:border-lemon px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact