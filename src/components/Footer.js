import React, {useEffect,useState} from 'react'

const Footer = () => {
const [date,setDate] = useState('')

    useEffect(()=>{
        let date =  new Date().getFullYear();
        setDate(date)
    },[])
    return (
      <div className='bg-gray-900 text-zinc-50 w-screen h-10 flex flex-row-reverse relative top-16 justify-around align-middle '><span className='self-center'>Brandon Covarrubias</span><span className='self-center'> &#169; {date}</span></div>
    )

}

export default Footer