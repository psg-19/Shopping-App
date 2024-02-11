import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import logo1 from '../assets/logo.png'
import { useSelector } from 'react-redux';


export const Navbar = () => {

  const{cart}=useSelector((state)=>state)

  return (
    <div className="bg-slate-900">
      
      <nav className='flex flex-row   justify-between item-center 
      h-20 max-w-6xl mx-auto
      '>

        <NavLink to='/'>
          <div className='ml-5 my-3'>
          <img src={logo1} className='h-14' alt="" />
          </div>
        </NavLink>
        <div className='flex flex-row gap-x-2 items-center font-medium
        text-slate-100 mr-5 sapce-x-6'>
         <NavLink to='/'>
          <p>Home</p>
         </NavLink>
         
        <NavLink to='/Cart'>
      <div className='relative'>
      <FaShoppingCart className='text-2xl'/>
        {
          cart.length > 0 && <span className='absolute flex  justify-center items-center rounded-full text-white animate-bounce h-5 w-5 text-xs  bg-green-600 -top-1 -right-2'>{cart.length}</span>
        }
      </div>
        </NavLink>
        </div>

      </nav>

    </div>
  )
}
