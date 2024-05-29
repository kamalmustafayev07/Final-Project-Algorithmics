import { useEffect } from "react";
import ProductsCard from "../components/ProductsCard"
import {useDispatch, useSelector} from "react-redux";
import { fetchContent } from "../store/reducer";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const BestSellers = () => {
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchContent('products/bestsellers?limit=3'));
  },[]);

  const bestSelling=useSelector((state)=>state.products.bestsellers);

  return (
    <section className="max-container mt-20 flex flex-col">
        <h2 className="text-5xl font-montserrat mb-10">Best<span className="text-primary"> Selling</span> Products</h2>
        <ul className="flex gap-10 flex-wrap justify-center">
            {bestSelling && bestSelling.map((item)=>{
                 return <li key={item.id}><ProductsCard {...item}/></li>
            })}
        </ul>
        <div className="w-[px] self-end mt-5">
            <Link to={`/products/bestsellers`}><Button innerText={"Watch the bestsellers"} type='Transparent'/></Link>
        </div>
       
    </section>
  )
}

export default BestSellers