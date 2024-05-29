import { useDispatch, useSelector } from "react-redux"
import ProductsCard from "../components/ProductsCard";
import { fetchContent } from "../store/reducer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AllProductsPage = ({ type }) => {
  let {search} = useParams();
  let {category}=useParams();
  const [currentPage,setCurrentPage]=useState(1);
  const products=useSelector(state=>state.products.products);
  const recordsPerPage=12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records=products.slice(firstIndex,lastIndex);
  const npages=Math.ceil(products.length/recordsPerPage);
  const numbers = [...Array(npages+1).keys()].slice(1);
  let dispatch = useDispatch();
  let notFound=useSelector(state=>state.products.notFound);


  useEffect(() => {
    if (type == 'search') {
      dispatch(fetchContent(`products/name/${search}`));
    }else if(type == 'bestsellers'){
      dispatch(fetchContent(`products/bestsellers`));
    }else{
      if(category){
        dispatch(fetchContent(`products/category/${category}`))
      }else{
        dispatch(fetchContent(`products`));
      }
    }
  }, [search,type,category]);

  if(notFound){
    return <p className="max-container mt-20 text-4xl font-montserrat font-light text-center">Not Found Anything</p>
  }

  const nextPage = ()=>{
    if(currentPage!==lastIndex)
      {
        setCurrentPage(currentPage+1);
      }
  }
  const prevPage = ()=>{
    if(currentPage!==firstIndex)
      {
        setCurrentPage(currentPage-1);
      }
  }
  const changeCurrentPage=(number)=>{
    setCurrentPage(number);
  }

  return (
    <section className="max-container mt-20 flex gap-10">
      <div className="h-[100vh] w-[360px] bg-black">
        Filter
      </div>
      <div className="w-full">
      <ul className="flex flex-wrap gap-7">
        {records.map(item => (
          <li key={item.id}><ProductsCard {...item} /></li>
        ))}
      </ul>
      <nav className="mt-10 w-full">
        <ul className="flex gap-5 justify-center w-full">
          {currentPage!==1 && <li>
            <a className="nav-element" href='#' onClick={prevPage}>Previous</a>
          </li> }
          
          {numbers.map((number,index)=>(
            <li key={index}><a href="#" className="nav-element" onClick={()=>changeCurrentPage(number)} >{number}</a></li>
          ))}
          {currentPage !== npages &&  <li>
            <a href='#' className='nav-element' onClick={nextPage}>Next</a>
          </li>}
        </ul>
      </nav>
      </div>
    </section>
  )
}

export default AllProductsPage