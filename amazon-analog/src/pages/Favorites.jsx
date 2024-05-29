import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from '../components/ProductsCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Favorites = () => {
  let favorites=useSelector(state=>state.products.favorites);
  return (
    <section className='max-container mt-20'>
        <h1 className="text-3xl mb-5 font-montserrat">Favorites ({favorites.length} products)</h1>
        <ul className='flex gap-4 flex-wrap justify-center'>
        {favorites.map((item)=>(
            <li key={item.id}><ProductsCard {...item}/></li>
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

export default Favorites