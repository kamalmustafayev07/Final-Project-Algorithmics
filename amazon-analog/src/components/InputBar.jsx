import { useState } from "react"
import { search } from "../assets/icons"
import { Link } from "react-router-dom"

const InputBar = () => {
  let [inputValue,setInputValue]=useState("");

  const isEmptyInput =()=>{
    return inputValue.trim()==="";
  }

  return (
    <div className=" relative flex items-center">
        <input onChange={(e)=>setInputValue(e.target.value)} className="input max-md:min-w-[250px] max-wide:min-w-[350px] max-sm:min-w-[150px] max-lg:min-w-[280px]" type="text" placeholder="Search for products..."/>
        {!isEmptyInput() &&  <Link className="absolute right-0 mr-5" to={`/products/name/${inputValue}`}><img src={search} alt="search" className="w-[25px] max-tablet:w-[15px]"/></Link> }
       
    </div>
  )
}

export default InputBar