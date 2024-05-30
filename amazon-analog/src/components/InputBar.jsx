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
        <input onChange={(e)=>setInputValue(e.target.value)} className="input max-md:min-w-[300px] " type="text" placeholder="Search for products..."/>
        {!isEmptyInput() &&  <Link className="absolute right-0 mr-5" to={`/products/name/${inputValue}`}><img src={search} alt="search" width={25}/></Link> }
       
    </div>
  )
}

export default InputBar