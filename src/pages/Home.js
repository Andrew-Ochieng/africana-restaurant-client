import Hero from "../components/Hero";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";

const Home = () => {
    return ( 
        <>
            <div>
                <Hero />
                <PopularDishes />
                <OrderProcess />
            </div>
        </>
     );
}
 
export default Home;