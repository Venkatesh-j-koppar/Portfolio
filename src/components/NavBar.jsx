import React, { useState } from 'react'
import {FaBar} from 'react-icons'

const NavBar = () => {
  const [nav,setNav]=useState(true)
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
      
       <div onClick={setNav(!nav)}>
          <FaBar/>
        </div>   
      


    </div>
  )
}

export default NavBar