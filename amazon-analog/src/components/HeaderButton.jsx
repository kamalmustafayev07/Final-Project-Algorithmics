const HeaderButton = ({innerText,innerImg,type}) => {
  return (
    <button className={`flex items-center gap-1   ${type=='Login' && 'text-white bg-primary p-4 rounded-2xl hover:bg-primary-900'} ${type=='favorcart' && 'bg-secondary p-4 rounded-2xl hover:bg-pale-blue text-black'}`}>
        <img src={innerImg} alt={innerImg} width={30} height={30}/>
        <span className="text-sm font-palanquin">{innerText}</span>
    </button>
  )
}

export default HeaderButton