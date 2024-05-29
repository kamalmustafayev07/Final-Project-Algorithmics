import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { heart } from "../assets/icons";
import { addToFavorites, deleteFromFavorites, decreaseCount,increaseCount,deleteFromCart} from "../store/reducer";

const CartCard = (props) => {
    let favorites=useSelector(state=>state.products.favorites);
    let cart=useSelector(state=>state.products.cart);
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
        if (text.length > 40) {
            return text.substring(0, 40) + '...';
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

    const handleIncreaseCount=(id)=>{
        dispatch(increaseCount({id:id}));
    }

    const handleDecreaseCount=(id)=>{
        dispatch(decreaseCount({id:id}));
        if(cart[props.index].count==1)
            dispatch(deleteFromCart({id:id}));
    }


    return (
        <div className="flex p-6 rounded-3xl shadow-xl relative ">
            <div className="relative mr-9">
            <button onClick={handleFavoritesClick} className={`right-4 absolute top-4 shadow-3xl p-3 rounded-full ${!clicked ? 'bg-white' : 'bg-primary-100' } `}>
                <img width={25} src={heart} alt={heart} />
            </button>
            {props.bestSeller && <span className="absolute bg-green-400 text-white font-palanquin px-3 rounded-xl">BESTSELLER</span>}
            <div className="h-[289px] w-[265px]"><img width={300} className="h-full z-0" src={props.image} alt='card-image' /></div>
            </div>
            <div>
                <h3 className="text-lg font-montserrat mt-6 mb-3">{truncateTitle(props.title)}</h3>
                <div className="flex gap-1 text-white items-center">
                    <button onClick={()=>handleDecreaseCount(props.id)} className="w-[40px] h-[40px] bg-primary hover:bg-primary-100 ">-</button>
                    <span className="shadow-xl bg-secondary px-10 text-black h-[40px] flex items-center"><span>{props.count}</span></span>
                    <button onClick={()=>handleIncreaseCount(props.id)} className="w-[40px] h-[40px] bg-primary hover:bg-primary-100 ">+</button>
                </div>
                <p className="mt-10 flex flex-col"><span className="font-palanquin"><span className="text-primary">One</span> Product Price : </span><span className="text-xl font-bold font-montserrat mb-4">${props.price.toFixed(2)}</span></p>
                <p className="flex flex-col absolute right-8"><span><span className="text-primary">Full</span> price : </span><span className="text-xl font-bold font-montserrat mb-4">${(props.price*props.count).toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default CartCard