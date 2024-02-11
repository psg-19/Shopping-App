import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';


export const CartItem = ({key,item,itemIndex}) => {

  const dispatch=useDispatch((state)=>state)

  const removeFromCart =()=>{
    dispatch(remove(item.id))
    toast.error("Item removed from Cart")
  }

  return (
    
      
       <div className='flex gap-x-6 p-4'>

      <div className='h-[200px] w-[240px]'>
        <img src={item.image} className='h-full w-full' alt="" />
      </div>
      <div className='felx flex-col'> 
        <h1 className='text-grey-700 font-semibold text-lg
        text-left   mt-1
        '>{item.title}</h1>
        <h1 className='mt-6'>{item.description.split(" ").slice(0,15).join(" ")+' ...'}</h1>
        <div className='flex justify-between mt-6'>
          <p className='text-green-600 font-semibold'>
          ${item.price}
        </p>

        <div className='mt-1'
        onClick={removeFromCart}>
          <FcDeleteDatabase/>
        </div>
        </div>


      </div>

       </div>

   
  )
}

export default CartItem
