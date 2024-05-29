const SliderImage = ({indexOfImage,imgUrl}) => {
  return (
    <img src={imgUrl} alt="slider-image" className={`${indexOfImage>1 ? 'pl-20' : 'pr-20'} w-[550px] h-[500px]`} />
  )
}

export default SliderImage