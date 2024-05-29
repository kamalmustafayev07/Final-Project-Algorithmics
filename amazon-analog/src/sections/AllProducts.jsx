import { useEffect } from "react";
import ProductsCard from "../components/ProductsCard"
import {useDispatch, useSelector} from "react-redux";
import { fetchContent } from "../store/reducer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const AllProducts = () => {
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchContent('products/?limit=4&offset=14'));
  },[]);

  const allProducts=useSelector((state)=>state.products.products);

  return (
    <section className="max-container mt-20 flex flex-col">
        <h2 className="text-5xl font-montserrat mb-20"><span className="text-primary">All</span> Products</h2>
        <ul className="flex justify-between flex-wrap">
            {allProducts && allProducts.map((item)=>{
                 return <li key={item.id}><ProductsCard {...item}/></li>
            })}
        </ul>
        <div className="w-[px] self-end mt-5">
            <Link to="/products"><Button innerText={"Watch all products"} type='Transparent'/></Link>
        </div>
       
    </section>
  )
}

export default AllProducts
