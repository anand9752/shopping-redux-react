import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className=''>
      {cart?.length > 0 ? (
        <div className='flex items-center justify-evenly lg:flex-row md:flex-row sm:flex-col xs:flex-col'>
          <div>
            {cart?.map((item, index) => (
              <div key={item.id}>
                <CartItem key={item.id} item={item} itemIndex={index} />
                <div className='w-full h-[1px] bg-slate-500 m-6'></div>
              </div>
            ))}
          </div>

          <div className='sticky top-0 flex flex-col items-center justify-evenly '>
              <div>
                  <div className='uppercase text-green-600 font-semibold text-md'>Your Cart</div>
                   <div className='uppercase text-green-600 font-semibold text-3xl' >Summary</div>
                   <p>
                      <span className='text-green-800 font-semibold text-sm '>Total Items: {cart?.length}</span>
                     </p>
              </div>
            
              <div>
                <p className='text-gray-800 font-bold'>Total Amount: ${totalAmount}</p>
                <button className='h-10 w-36 bg-blue-400 font-extrabold text-white rounded-lg hover:scale-105 transition duration-150 ease-in'>CheckOut Now</button>
              </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <h1>Cart Empty</h1>
          <Link to="/">
            <button className=' w-32 bg-green-400 h-10 text-white font-extrabold hover:scale-105 hover:text-green-400 hover:bg-white rounded-lg border border-green-400 transition ease-in duration-150'>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
