import HeroLatest from "../sections/HeroLatest"
import AllProducts from "../sections/AllProducts"
import BestSellers from "../sections/BestSellers"
import Subscribe from "../sections/Subscribe"


const Home = () => {
  return (
    <>
      <section>
        <HeroLatest/>
      </section>
      <section>
      <AllProducts/>
      </section>
       <section>
       <BestSellers/>
       </section>
       <section>
        <Subscribe/>
       </section>
    </>
    
  )
}

export default Home