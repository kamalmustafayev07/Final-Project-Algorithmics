import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductsCard from '../components/ProductsCard';
const Cart = () => {
  let cart=useSelector(state=>state.products.cart);
  return (
    <section className='max-container mt-20 shadow-xl p-10 rounded-3xl'>
        <h1 className="text-3xl mb-5 font-montserrat">Cart ({cart.length} products)</h1>
        <ul>
        {cart.map((item)=>(
            <li className="" key={item.id}><ProductsCard {...item}/></li>
        ))}
        </ul>
        <div className='mt-5'>
        <Link to="/">
        <Button type={'Transparent-No-Arrow'} innerText={'Back to main page'}/>
        </Link>
        </div>
    </section>
  )
}

export default Cart