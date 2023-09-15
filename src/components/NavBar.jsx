import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  const [nav,setNav]=useState(false)
  const links=[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'Portfolio'
    },
    {
      id:4,
      link:'Experience'
    },
    {
      id:5,
      link:'Contact'
    },
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-black text-white '>
      <h1 className='text-5xl font-signature ml-2'>Venkatesh</h1>
      
      <ul className='hidden md:flex'>
        {links.map((link,id)=>(
          <li key={id} className=' px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200 list-none'>{link.link}</li>
        ))}
      </ul>
      
       <div onClick={()=>setNav(!nav)} className='cursor-pointer text-gray-500 z-10 md:hidden'>
          {nav?<FaTimes size={30}/> :<FaBars size={30}/>}
       </div> 

       {nav&&<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {
        links.map((link)=>(<li className='text-4xl m-5 capitalize'>{link.link}</li>))
        }
        </ul>}   
        

      


    </div>
  )
}

export default NavBar