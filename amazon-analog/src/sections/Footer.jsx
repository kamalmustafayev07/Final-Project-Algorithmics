import { footerUpInfo,footerDownInfo } from "../constants"

const Footer = () => {
  return (
    <section className="max-container mt-40">
        <div className="flex justify-between mb-40">
            {footerUpInfo.map((item)=>(
                <div key={item.title}>
                    <h4 className=" text-gray-700 font-montserrat text-2xl mb-7">{item.title}</h4>
                    <ul className="flex flex-col gap-3 text-lg font-montserrat">
                        {item.list.map((item,index)=>(
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="mb-20 flex justify-between">
            <ul className="flex gap-10">
            {footerDownInfo.map((item,index)=>(
                <li key={index} className="text-xl font-palanquin">{item.text}</li>
            ))}
            </ul>
            <p className="text-xl font-palanquin">@ 1996-2024, KamalShop.com, Inc, or its affiliates</p>
            
        </div>
    </section>
  )
}

export default Footer