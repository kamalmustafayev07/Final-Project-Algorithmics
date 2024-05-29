import InputBar from "../components/InputBar"
import HeaderButton from "../components/HeaderButton"
import { heart, profile, shoppingCart } from "../assets/icons"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const NavBar = () => {
    let favoritesLength = useSelector((state) => state.products.favorites.length);
    let cartProductsCount = useSelector((state)=>state.products.cartProductsCount);
    return (
        <section className="max-container pt-8 pb-3 flex flex-col border-b justify-center">
            <div className="flex justify-between items-center mb-9">
                <div className="text-4xl font-palanquin font-bold">
                    <Link to="/">Kamal<span className="text-primary">Shop</span></Link>
                </div>
                <InputBar />
                <div className="flex gap-3 items-center">
                    <div className="relative">
                        <Link to="/favorites"><HeaderButton innerText={"WISHLIST"} innerImg={heart} type={'favorcart'}/></Link>
                        {favoritesLength>0 && <span className="counting"><span>{favoritesLength}</span></span>}
                    </div>
                    <div className="relative">
                        <Link to="/cart"><HeaderButton innerText={"CART"} innerImg={shoppingCart} type={'favorcart'} /></Link>
                        {cartProductsCount>0 && <span className="counting"><span>{cartProductsCount}</span></span>}
                    </div>
                    <HeaderButton innerText={"PROFILE"} innerImg={profile} type={'Login'} />
                </div>
            </div>
        </section>
    )
}

export default NavBar