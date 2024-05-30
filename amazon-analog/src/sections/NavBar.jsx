import InputBar from "../components/InputBar";
import HeaderButton from "../components/HeaderButton";
import { hamburger, heart, profile, shoppingCart } from "../assets/icons";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { close } from "../assets/icons";

const NavBar = () => {
    let favoritesLength = useSelector((state) => state.products.favorites.length);
    let cartProductsCount = useSelector((state) => state.products.cartProductsCount);
    let [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="max-container pt-8 pb-3 flex flex-col border-b justify-center adaptive px-3">
            <div className="flex justify-between items-center mb-9">
                <div className="text-4xl font-palanquin font-bold max-wide:text-3xl max-sm:text-lg">
                    <Link to="/">Kamal<span className="text-primary">Shop</span></Link>
                </div>
                <InputBar />
                <div className="flex gap-3 items-center">
                    <div className="relative max-tablet:hidden">
                        <Link to="/favorites"><HeaderButton innerText={"WISHLIST"} innerImg={heart} type={'favorcart'} /></Link>
                        {favoritesLength > 0 && <span className="counting"><span>{favoritesLength}</span></span>}
                    </div>
                    <div className="relative max-tablet:hidden">
                        <Link to="/cart"><HeaderButton innerText={"CART"} innerImg={shoppingCart} type={'favorcart'} /></Link>
                        {cartProductsCount > 0 && <span className="counting"><span>{cartProductsCount}</span></span>}
                    </div>
                    <div className="max-tablet:hidden">
                        <HeaderButton innerText={"PROFILE"} innerImg={profile} type={'Login'} />
                    </div>
                    <div className="max-tablet:block hidden" onClick={toggleMenu}>
                        <img src={hamburger} alt="hamburger-menu" width={20} height={20} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg z-50">
                    <div className="p-4">
                        <button className="text-black" onClick={toggleMenu}><img width={20} height={20} src={close} alt="" /></button>
                        <ul className="mt-4 text-white font-montserrat">
                            <li className="mb-2">
                                <Link to="/favorites" className="block p-2">Favorites</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/cart" className="block p-2">Cart</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="block p-2">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {isOpen && (
                <div className="fixed inset-0" onClick={toggleMenu}></div>
            )}
        </section>
    );
};

export default NavBar;
