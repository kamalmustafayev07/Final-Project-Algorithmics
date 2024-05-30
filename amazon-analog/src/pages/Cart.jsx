import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartCard from '../components/CartCard';

const Cart = () => {
  let cart=useSelector(state=>state.products.cart);
  let cartsCount=useSelector(state=>state.products.cartProductsCount);
  const totalGoods = cart.reduce((sum, item) => sum + (item.count * item.price), 0).toFixed(2);

  return (
    <section className='max-container mt-20 shadow-xl p-10 rounded-3xl adaptive max-wide:mt-3'>
        <h1 className="text-3xl mb-10 font-montserrat">Cart ({cartsCount} products)</h1>
        <div className='flex justify-between max-wide:justify-center max-wide:gap-10 max-[500px]:flex-col-reverse max-[500px]:items-center'>
         <ul className='flex flex-wrap w-[min-content] gap-3'>
            {cart.map((item,index)=>(
            <li className="w-[700px] max-[940px]:w-[540px] max-[888px]:w-[460px] max-lg:w-[610px] max-[820px]:w-[min-content] " key={item.id}><CartCard {...item} index={index}/></li>
            ))}
        </ul>
        {cartsCount!=0 && <div className='h-full shadow-xl p-10 rounded-3xl font-montserrat max-xl:p-8' >
            <h2 className='text-2xl font-montserrat mb-5 max-xl:text-xl'>Total Order</h2>
            <div className='flex flex-col gap-3 pb-8 border-b mb-5 max-lg:pb-4'>
            <p className='flex justify-between max-lg:text-xs'><span>Total Goods</span><span>${totalGoods}</span></p>
            <p className='flex justify-between mb-4 max-lg:text-xs'><span>Shipping</span><span>$0</span></p>
            <p className='text-xs font-palanquin max-lg:text-[10px]'>Shipping cost can be different due to different sellers and numbers of orders</p>
            </div>
            <p className='font-bold text-2xl max-lg:text-base'>Total: ${totalGoods}</p>
        </div>}
        
        </div>
       
        <div className='mt-5'>
        <Link to="/">
        <Button type={'Transparent-No-Arrow'} innerText={'Back to main page'}/>
        </Link>
        </div>
    </section>
  )
}

export default Cart