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
    dispatch(fetchContent('products/categories'))
  },[]);


  return (
    <section className="max-container pt-6 max-wide:w-full max-wide:px-8 max-phone:px-6 max-sm-phone:px-4">
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
            <div className={`flex ${index > 1 && 'flex-row-reverse'} h-[500px] items-center gap-20 justify-center max-wide:h-full max-phone:gap-10 max-sm-phone:gap-8`}>
              <div className="w-[50%] flex flex-col gap-6 max-tablet:gap-3 max-phone:gap-2 max-tablet:w-[55%] max-sm-phone:w-[33%]">
                <h2 className=" text-5xl font-montserrat max-wide:text-3xl max-tablet:text-xl max-md:text-lg max-phone:text-sm max-sm-phone:text-[10px] max-sm-phone:leading-3">{item.label}</h2>
                <p className="info-text max-sm-phone:text-[7px] ">{item.subtext}</p>
                <div className="w-[280px] max-wide:w-[180px] max-tablet:w-[120px] max-sm-phone:w-[80px]">
                  <Link to={`/products/category/${categories[index]}`}><Button innerText={"Shop Now"} /></Link>
                </div>
              </div>
              <div className="h-full flex">
                <img className="h-[400px] self-center max-tablet:h-[300px] max-md:h-[250px] max-sm:h-[200px] max-phone:h-[160px] max-sm-phone:h-[130px]" src={item.imgURL} alt="slider-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroLatest;

