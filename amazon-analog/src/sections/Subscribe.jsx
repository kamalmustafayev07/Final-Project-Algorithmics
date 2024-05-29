import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container mt-20 bg-gray-200 p-20 flex justify-between rounded-3xl">
        <div className="w-1/2 flex flex-col gap-10">
        <h2 className="text-7xl font-montserrat">SUBSCRIBE<br/>TO THE NEWS</h2>
        <p className="info-text text-xl">Be aware of all discounts and bargains!
Don’t miss your benefit!</p>
        </div>
        <div className="flex item-center self-center">
            <div className="relative flex items-center h-[70px]">
            <input type="text" placeholder="kamalshop@gmail.com" className="input"/>
            <div className="w-[100px] absolute right-3 h-[70%]">
                <Button innerText={"Subscribe"} type={"No-Arrow"}/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe