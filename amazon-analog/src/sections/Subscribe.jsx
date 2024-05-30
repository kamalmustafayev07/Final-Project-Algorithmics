import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container mt-20 bg-gray-200 p-20 flex justify-between rounded-3xl adaptive gap-20 max-small-tablet:flex-col max-small-tablet:items-center max-small-tablet:gap-5">
        <div className="flex flex-col gap-10 max-lg:gap-4 ">
        <h2 className="text-7xl font-montserrat max-lg:text-4xl max-tablet:text-3xl self-center">SUBSCRIBE<br/>TO THE NEWS</h2>
        <p className="info-text">Be aware of all discounts and bargains!
Don’t miss your benefit!</p>
        </div>
        <div className="flex item-center self-center">
            <div className="relative flex items-center h-[70px] max-lg:h-[50px]">
            <input type="text" placeholder="kamalshop@gmail.com" className="input max-[1100px]:min-w-[370px] max-md:min-w-[270px]"/>
            <div className="w-[100px] absolute right-3 h-[70%] max-phone:h-[40px] max-phone:w-[60px]">
                <Button innerText={"Subscribe"} type={"No-Arrow"}/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe