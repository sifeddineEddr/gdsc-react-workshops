import Header from "../components/Header/Header"
import ShopSection from "../components/ShopSection/ShopSection"
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-12">
    <Header/>
    <ShopSection/>
    </div>
  )
}

export default Home