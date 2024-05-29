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
    <section className='max-container mt-20 shadow-xl p-10 rounded-3xl'>
        <h1 className="text-3xl mb-10 font-montserrat">Cart ({cartsCount} products)</h1>
        <div className='flex gap-40'>
         <ul className='flex flex-wrap'>
            {cart.map((item,index)=>(
            <li className="w-[700px]" key={item.id}><CartCard {...item} index={index}/></li>
            ))}
        </ul>
        <div className='h-full shadow-xl w-full p-10 rounded-3xl font-montserrat' >
            <h2 className='text-2xl font-montserrat mb-5'>Total Order</h2>
            <div className='flex flex-col gap-3 pb-8 border-b mb-5'>
            <p className='flex justify-between'><span>Total Goods</span><span>${totalGoods}</span></p>
            <p className='flex justify-between mb-4'><span>Shipping</span><span>$0</span></p>
            <p className='text-xs font-palanquin '>Shipping cost can be different due to different sellers and numbers of orders</p>
            </div>
            <p className='font-bold text-2xl'>Total: ${totalGoods}</p>
        </div>
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