import Button from "../components/Button"
import { heart } from "../assets/icons";
import { addToFavorites, deleteFromFavorites,addToCart } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
    let favorites=useSelector(state=>state.products.favorites);
    let [clicked,setClicked]=useState(false);
    let dispatch=useDispatch();

    useEffect(()=>{
        if(!(favorites.findIndex(item=>item.id==props.id)<0))
            {
                setClicked(true);
            }
            else{
                setClicked(false);
            }
    },[favorites]);

    const truncateTitle = (text) => {
        if (text.length > 20) {
            return text.substring(0, 20) + '...';
        } else {
            return text;
        }
    };

    const handleFavoritesClick = () => {
        if (!clicked) {
            dispatch(addToFavorites({
                id: props.id,
                title: props.title,
                price: props.price,
                description: props.description,
                category: props.category,
                image: props.image,
                rating: {
                  rate: props.rating.rate,
                  count: props.rating.rate
                },
                bestSeller: props.bestSeller
            }));
        } else {
            dispatch(deleteFromFavorites({
                id: props.id
            }))
        }
        setClicked(!clicked);
    }

    const handleAddToCart=()=>{
        dispatch(addToCart({
            id: props.id,
            brank:props.brand,
            title: props.title,
            price: props.price,
            description: props.description,
            category: props.category,
            image: props.image,
            rating: {
              rate: props.rating.rate,
              count: props.rating.rate
            },
            bestSeller: props.bestSeller
        }));
    }

    return (
        <div className="pt-10 p-6 rounded-3xl shadow-xl relative w-[400px] max-tablet:w-[350px] max-phone:w-[300px] flex flex-col">
            <button onClick={handleFavoritesClick} className={`right-4 absolute top-10 shadow-3xl p-3 rounded-full active:scale-75 transition ${!clicked ? 'bg-white' : 'bg-primary-100' } `}>
                <img className="w-[25px] max-tablet:w-[20px]" src={heart} alt={heart} />
            </button>
            {props.bestSeller && <span className="absolute bg-green-400 text-white font-palanquin px-3 rounded-xl max-tablet:text-sm">BESTSELLER</span>}
            <Link className="flex flex-col" to={`/products/search/${props.id}`}>
            <div className="h-[200px] self-center max-tablet:h-[170px] max-phone:h-[150px] max-sm-phone:h-[130px]"><img className="h-full z-0" src={props.image} alt='card-image' /></div>
            <h2 className="text-black mt-6 font-bold font-palanquin max-tablet:text-sm max-tablet:mt-3">{props.brand}</h2>
            <h3 className="text-lg font-montserrat mb-3 hover:text-primary max-tablet:text-base max-tablet:mb-0 max-phone:text-sm">{truncateTitle(props.title)}</h3>
            <div className="font-montserrat flex gap-2"><StarRating rating={props.rating.rate}/><span className="self-center">({props.rating.rate})</span></div>
            <p className="text-xl font-bold font-montserrat mb-4 max-tablet:text-lg">${props.price.toFixed(2)}</p>
            </Link>
            <Button handleAddToCart={handleAddToCart} innerText={"Add to Cart"} />
        </div>
    )
}   

export default ProductsCard;