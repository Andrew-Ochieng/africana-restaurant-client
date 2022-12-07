import Hero from "../components/Hero";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";

const Home = ({menus, loading, error}) => {


    return ( 
        <>
            <div>
                
                <Hero />
                <PopularDishes menus={menus} loading={loading} error={error} />
                <OrderProcess />

            </div>
        </>
     );
}
 
export default Home;