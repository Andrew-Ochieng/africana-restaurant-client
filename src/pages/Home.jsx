import Hero from "../components/Home/Hero";
import OrderProcess from "../components/Home/OrderProcess";
import PopularDishes from "../components/Home/PopularDishes";

const Home = ({menus, loading, error, user}) => {
    // user = user || JSON.parse(localStorage.getItem("user"))
    
    // console.log(user)

    return ( 
        <>
        
            <Hero />
            <div className="flex justify-center">
                <PopularDishes menus={menus} loading={loading} error={error} />
            </div>
            <div>
                <OrderProcess />
            </div>
            
        </>
     );
}
 
export default Home;