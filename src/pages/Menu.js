import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Menu = ({menus, loading, error}) => {

    return ( 
        <>
            <Navbar />
            <div className="md:m-8 m-4">
                <h1 className="text-green-500 font-semibold text-xl py-2 px-3">
                    Browse All Menus & Menu Items
                </h1>
                { error && <h4 className="text-red-500">{ error }</h4>}
                {loading ? (
                    <div className="pt-4 pr-4">
                        <FadeLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Content..."
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-4">
                        {menus && menus.map((menu_item, index) => (
                            <div key={index} className="m-4 py-2 px-3 rounded-xl ">
                                <img className="rounded-xl w-full h-40 md:h-44" src={menu_item.imageUrl} alt="" />
                                <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu_item.name}</h3>
                                <p className="my-1 font-light text-sm">{menu_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                                <h4 className="text-green-500 font-medium mb-4">Ksh {menu_item.price}</h4>
                                <Link 
                                    to={`/menu_item/${menu_item.id}`}
                                    className="btn bg-green-500 "
                                >
                                    More Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
                
            <Footer />
        </>
     );
}
 
export default Menu;