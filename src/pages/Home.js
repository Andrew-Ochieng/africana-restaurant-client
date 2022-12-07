import Hero from "../components/Hero";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";

const Home = ({menus}) => {


    return ( 
        <>
            <div>
                <Hero />
                <PopularDishes menus={menus}  />
                <OrderProcess />

            </div>
        </>
     );
}
 
export default Home;