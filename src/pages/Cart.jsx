import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {CartItem} from '../components/CartItem'

export const Cart = () => {

  const {cart}=useSelector((state)=> state) 
  console.log('printing cart')
  console.log(cart)

  const[totalAmount,setTotalAmount]=useState(0)

  //ab totla amt har bar change hoga jab 
  //bhi cart m koi item add hoga ie we need to change it every time
  //so we useeffect

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart]) //work everytime when something changes in cart

  return (

    
    <div className='flex flex-row  ml-[17%] mr-[17%]
    '>
      
{

cart.length >0 ? 
(<div className='flex w-[100%] flex-row flex-wrap '>


<div className='divide-y max-w-[66%] divide-slate-700 
flex flex-col 
'>
{
  cart.map((item,index)=> {
    return <CartItem key={item.id} item={item} itemIndex={index} ></CartItem>

  })}
</div>

<div className='flex flex-col w-[34%] justify-between items-center gap-y-6'>
  
<div className='mt-12 flex flex-col items-center justify-center'> 
  <div className='mt-1 font-bold text-green-500'>Your Cart</div>
  <div className='mt-1 text-green-600 text-3xl font-extrabold'>Summary</div>
  <p>
    <span className='font-semibold'>Total Items : {cart.length}</span>
  </p>
</div>

<div className='mb-20 ml-7'>
  <p className='font-bold'>
    Total Amount :<span className='font-extrabold'>${totalAmount}</span>
  </p>
  <button
  className='border bg-green-500 px-24 rounded-md py-2'>Check Out</button>
</div>
</div>

</div>


)


:


(<div>
 <p> Your cart is empty!</p>
<NavLink to='/'> <button>Shop Now</button></NavLink>
</div>)


}

    </div>
  )
}
