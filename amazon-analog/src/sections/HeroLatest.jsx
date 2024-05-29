import { categoriesSlider } from "../constants";
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../components/Button";
import SliderImage from "../components/SliderImage";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../store/reducer";
import { Link } from "react-router-dom";

const HeroLatest = () => {
  let categories=useSelector(state=>state.products.categories);
  let dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchContent('products/categories'));
  },[]);


  return (
    <section className="max-container pt-6">
      <Swiper
        modules={[Autoplay, A11y, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "#FF9900",
          "--swiper-pagination-bullet-inactive-color": "#F9F9F9",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-vertical-gap": "50px"
        }}
      >
        {categoriesSlider.map((item, index) => (
          <SwiperSlide key={item.label}>
            <div className={`flex ${index > 1 && 'flex-row-reverse'} h-[500px] items-center justify-between gap-4`}>
              <div className="w-1/2 flex flex-col gap-6">
                <h2 className=" text-5xl font-montserrat">{item.label}</h2>
                <p className="info-text">{item.subtext}</p>
                <div className="w-[280px]">
                  <Link to={`/products/category/${categories[index]}`}><Button innerText={"Shop Now"} /></Link>
                </div>
              </div>
              <div className="h-full">
                <SliderImage indexOfImage={index} imgUrl={item.imgURL} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroLatest;

