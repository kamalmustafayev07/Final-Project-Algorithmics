import { footerUpInfo,footerDownInfo } from "../constants"

const Footer = () => {
  return (
    <section className="max-container mt-40 adaptive max-lg:mt-20">
        <div className="flex justify-between mb-40 max-lg:mb-20 max-lg:justify-center max-lg:gap-10 max-sm-phone:gap-3">
            {footerUpInfo.map((item)=>(
                <div key={item.title}>
                    <h4 className=" text-gray-700 font-montserrat text-2xl mb-7 max-wide:text-xl max-lg:text-sm">{item.title}</h4>
                    <ul className="flex flex-col gap-3 text-lg font-montserrat max-wide:text-base max-lg:text-[10px]">
                        {item.list.map((item,index)=>(
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="mb-20 flex justify-between max-lg:justify-center max-lg:gap-10 max-sm-phone:gap-5" >
            <ul className="flex gap-10">
            {footerDownInfo.map((item,index)=>(
                <li key={index} className="text-xl font-palanquin max-lg:text-sm">{item.text}</li>
            ))}
            </ul>
            <p className="text-xl max-lg:text-sm font-palanquin">@ 1996-2024, KamalShop.com, Inc, or its affiliates</p>
            
        </div>
    </section>
  )
}

export default Footer