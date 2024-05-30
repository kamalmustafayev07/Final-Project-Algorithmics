import { useEffect } from "react";
import ProductsCard from "../components/ProductsCard"
import {useDispatch, useSelector} from "react-redux";
import { fetchContent } from "../store/reducer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const AllProducts = () => {
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchContent('products/?limit=3&offset=24'));
  });

  const allProducts=useSelector((state)=>state.products.products);

  return (
    <section className="max-container mt-20 flex flex-col max-wide:w-full adaptive">
        <h2 className="text-5xl font-montserrat mb-10 max-wide:text-3xl max-tablet:text-2xl"><span className="text-primary">All</span> Products</h2>
        <ul className="flex gap-10 flex-wrap justify-center max-tablet:gap-5 max-phone:gap-3">
            {Array.isArray(allProducts) && allProducts.length !== 0 && allProducts.map((item)=>(
                <li key={item.id}><ProductsCard {...item}/></li>
            ))}
        </ul>
        <div className="w-[px] self-end mt-5">
            <Link to="/products"><Button innerText={"Watch all products"} type='Transparent'/></Link>
        </div>
       
    </section>
  )
}

export default AllProducts
