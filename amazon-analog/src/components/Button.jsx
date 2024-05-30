// Button.jsx
import React from 'react';
import { arrowRight } from '../assets/icons';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = ({ innerText, type, handleAddToCart }) => {
  const notify = () => toast.success('Product successfully added to Cart!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  return (
    <>
      <button onClick={() => {
        if (handleAddToCart) {
          handleAddToCart();
          notify();
        }
      }} className={`${(type === 'Transparent' || type === 'Transparent-No-Arrow') ? 'bg-transparent text-primary text-lg' : 'bg-primary hover:bg-primary-100 text-white max-phone:text-[8px]'} rounded-2xl py-3 flex items-center justify-center gap-3 max-phone:gap-2 font-montserrat w-full ${type === 'No-Arrow' ? 'text-sm h-full rounded-full max-phone:py-1':''} max-wide:text-sm max-tablet:text-xs max-phone:py-1 `}>
        {innerText}
        {(type !== 'No-Arrow' && type !== 'Transparent-No-Arrow') && <img className='max-phone:w-[10px] max-md:w-[15px]' src={arrowRight} alt="arrow icon" />}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Button;
