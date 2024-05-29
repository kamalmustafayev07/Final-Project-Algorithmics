import {arrowRight} from '../assets/icons'

const Button = ({innerText,type,handleAddToCart}) => {
  return (
    <button onClick={handleAddToCart} className={`${(type=='Transparent' || type=='Transparent-No-Arrow') ? 'bg-transparent text-primary text-lg' : 'bg-primary hover:bg-primary-100 text-white pl-[92px]'} rounded-2xl py-3 flex items-center gap-3 font-montserrat w-full ${type=='No-Arrow' && 'text-sm h-full rounded-full !pl-4'}`}>
        {innerText}
        {(type!=`No-Arrow` && type!=`Transparent-No-Arrow`) && <img src={arrowRight} alt={arrowRight}/>}
    </button>
  )
}

export default Button