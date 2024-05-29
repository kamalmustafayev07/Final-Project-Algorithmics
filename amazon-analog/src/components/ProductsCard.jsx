import Button from "../components/Button"
import { heart } from "../assets/icons";
import { addToFavorites, deleteFromFavorites,addToCart } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductsCard = (props) => {
    let favorites=useSelector(state=>state.products.favorites);
    let [clicked,setClicked]=useState(false);
    let dispatch=useDispatch();

    useEffect(()=>{
        if(!(favorites.findIndex(item=>item.id==props.id)<0))
            {
                console.log('working!');
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
        <div className="pt-10 p-6 rounded-3xl shadow-xl relative w-[400px] flex flex-col">
            <button onClick={handleFavoritesClick} className={`right-4 absolute top-10 shadow-3xl p-3 rounded-full ${!clicked ? 'bg-white' : 'bg-primary-100' } `}>
                <img width={25} src={heart} alt={heart} />
            </button>
            {props.bestSeller && <span className="absolute bg-green-400 text-white font-palanquin px-3 rounded-xl">BESTSELLER</span>}
            <div className="h-[200px] self-center"><img className="h-full z-0" src={props.image} alt='card-image' /></div>
            <h3 className="text-lg font-montserrat mt-6 mb-3">{truncateTitle(props.title)}</h3>
            <p className="text-xl font-bold font-montserrat mb-4">${props.price.toFixed(2)}</p>
            <Button handleAddToCart={handleAddToCart} innerText={"Add to Cart"} />
        </div>
    )
}

export default ProductsCard;