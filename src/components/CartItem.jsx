import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove } from '../redux/Slices/cartSlice'
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch()
  const removeFromCart = ()=>{
     dispatch(remove(item.id));
     toast.success("Removed")
  }


  return (



    <div className=" w-52">
        
        <div className='flex flex-row w-96 border-lime-300'>
          <div className='w-[180px]'>
            <img src={item.image} alt="" className='w-full h-full' />
          </div>

        <div>

          <div>
             <h1 className='text-gray-700 font-semibold text-lg text-left  w-40 mt-1'>
            {item.title} 
             </h1>
             <h1>{item.descrition}</h1>
          </div>
          <div className='flex flex-row justify-evenly'>
             <p className='text-green-600 font-semibold'> ${item.price}</p>
             <div onClick={removeFromCart} className='bg-red-300 w-7 h-7 flex justify-center items-center rounded-full hover:scale-110 transition duration-200 ease-in' >
                <MdDelete className=" text-xl text-red-700" />
             </div>
          </div>


        </div>
         </div>
    </div>
  )
}

export default CartItem
