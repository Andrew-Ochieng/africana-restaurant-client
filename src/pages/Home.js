import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";

const Home = ({menus, loading, error}) => {


    return ( 
        <>
            <Navbar />
            <div>
                
                <Hero />
                <div className="flex justify-center">
                    <PopularDishes menus={menus} loading={loading} error={error} />
                </div>
                <div>
                    <OrderProcess />
                </div>

            </div>
            <Footer />
        </>
     );
}
 
export default Home;