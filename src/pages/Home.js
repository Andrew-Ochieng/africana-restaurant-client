import Hero from "../components/Hero";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";

const Home = ({menus, loading, error}) => {


    return ( 
        <>
            <div>
                
                <Hero />
                <div className="flex justify-center">
                    <PopularDishes menus={menus} loading={loading} error={error} />
                </div>
                <div>
                    <OrderProcess />
                </div>

            </div>
        </>
     );
}
 
export default Home;