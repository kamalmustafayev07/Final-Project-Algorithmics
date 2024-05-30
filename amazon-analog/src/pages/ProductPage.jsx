import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchContent } from "../store/reducer";
import { heart } from "../assets/icons";
import { useState } from "react";
import StarRating from "../components/StarRating";
import Button from "../components/Button";
import { addToFavorites, addToCart, deleteFromFavorites } from "../store/reducer";


const ProductPage = () => {
    let [currentImage, setCurrentImage] = useState();
    let [activeImage, setActiveImage] = useState(true);
    let { id } = useParams();
    let product = useSelector(state => state.products.products);
    let favorites = useSelector(state => state.products.favorites);
    let [clicked, setClicked] = useState(false);
    let dispatch = useDispatch();

    const ratingRate = product && product.rating ? product.rating.rate : 0;
    const bestSeller = product && product.bestSeller;

    useEffect(() => {
        if (!(favorites.findIndex(item => item.id == product.id) < 0)) {
            setClicked(true);
        }
        else {
            setClicked(false);
        }
    }, [favorites]);

    const handleFavoritesClick = () => {
        if (!clicked) {
            dispatch(addToFavorites({
                id: product.id,
                brand: product.brand,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                rating: {
                    rate: product.rating.rate,
                    count: product.rating.rate
                },
                bestSeller: product.bestSeller
            }));
        } else {
            dispatch(deleteFromFavorites({
                id: product.id
            }))
        }
        setClicked(!clicked);
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            brand: product.brand,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: {
                rate: product.rating.rate,
                count: product.rating.rate
            },
            bestSeller: product.bestSeller
        }));
    }


    useEffect(() => {
        dispatch(fetchContent(`products/search/${id}`));
    }, [id]);

    useEffect(() => {
        if (product) {
            setCurrentImage(product.image);
        }
    }, [product]);



    return (
        <section className="max-container mt-20 flex justify-center items-center gap-10 apadtive px-10 max-[777px]:flex-col max-[777px]:gap-1">
            <div className="relative">
                <div className="self-center w-[500px] flex justify-center max-lg:w-[400px] max-tablet:w-[280px] max-phone:w-[200px] max-[777px]:w-[500px]"><img className="w-[400px] max-h-[540px] max-xl:w-[350px] max-xl:max-h-[495px] max-tablet:w-[300px] max-tablet:max-h-[410px]" src={product && currentImage} alt='card-image' /></div>
                {bestSeller && <span className="absolute top-6 left-20 max-tablet:top-4 max-tablet:left-2 bg-green-400 text-white font-palanquin px-3 rounded-xl">BESTSELLER</span>}
                <button onClick={handleFavoritesClick} className={`absolute right-16 top-3 max-tablet:right-2 max-tablet:top-1 shadow-3xl p-3 rounded-full active:scale-75 transition ${!clicked ? 'bg-white' : 'bg-primary-100'} `}>
                    <img width={25} src={heart} alt={heart} />
                </button>
            </div>
            <div className="flex flex-col justify-between max-[777px]:items-center">
                <div className="flex flex-col gap-1">
                    <h2 className="text-black mt-6 font-bold font-palanquin text-4xl max-xl:text-3xl max-lg:text-xl max-phone:text-sm">{product && product.brand}</h2>
                    <h3 className="text-xl max-lg:text-base max-phone:text-xs">{product && product.title}</h3>
                    <div className="font-montserrat flex gap-2 ">
                        <StarRating rating={ratingRate} />
                        <span className="self-center">({product && product.rating && product.rating.rate})</span>
                    </div>
                    <h4 className="text-lg font-bold font-palanquin mt-10 max-xl:text-base max-lg:text-sm max-[777px]:mt-2 ">ABOUT THIS PRODUCT</h4>
                    <p className="info-text ">{product.description}</p>
                    <ul className="flex gap-3 mt-10 max-[777px]:mt-2">
                        <li onClick={() => {
                            if (!activeImage) {
                                setCurrentImage(product.image); setActiveImage(!activeImage)
                            }
                        }
                        } className={`${activeImage && 'border border-primary'}`}><img className="h-[75px] max-lg:h-[50px]" src={product && product.image} alt="product-first-image" /></li>
                        {product.imageSecond && <li onClick={() => {
                            if (activeImage) {
                                setCurrentImage(product.imageSecond);
                                setActiveImage(!activeImage);
                            }
                        }} className={`${!activeImage && 'border border-primary'}`}><img className="h-[75px] max-lg:h-[50px]" src={product && product.imageSecond} alt="product-first-image" /></li>}

                    </ul>
                    <p className="font-bold text-3xl font-montserrat mt-10 mb-4 max-lg:text-xl max-[777px]:mt-2">Price : ${product && product.price && (product.price).toFixed(2)}</p>

                </div>
                <div className="w-[300px] max-lg:w-[200px] max-tablet:self-start">
                    <Button handleAddToCart={handleAddToCart} innerText={"Add to Cart"} />
                </div>

            </div>
        </section>
    )
}

export default ProductPage;
