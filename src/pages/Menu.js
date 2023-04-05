import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Menu = ({menus, loading, error}) => {
    console.log(menus)

    return ( 
        <>
            <Navbar />
            <div>
                {loading && <h3>Loading data...</h3>}
                { error && <h4 className="text-red-500">{ error }</h4>}

                <h1 className="text-green-500 font-semibold text-xl m-4 py-2 px-3">
                    Browse All Menus & Menu Items
                </h1>
                <div>
                    {menus && menus.map((menu, index) => (
                        <div key={index} className="m-4 py-2 px-3 rounded-xl">
                            <h3 className="mt-4 md:text-3xl text-xl font-semibold text-gray-800">{menu.name}</h3>
                            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-6">
                            {menu.menu_items && menu.menu_items.slice(0, 4).map((menu_item) => (
                                <div key={menu_item.id} className='my-6 bg-green-100 px-2 pt-2 pb-4 rounded-lg'>
                                    <div className="w-full">
                                        <img className="rounded-xl w-full h-40 md:h-44" src={menu_item.image_url} alt="" />
                                    </div>
                                    <div className="py-2 px-3">
                                        <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu_item.name}</h3>
                                        <p className="my-1 font-light text-sm">{menu_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                                        <h4 className="text-green-500 font-medium">Ksh {menu_item.price}</h4>
                                        <div className="my-4 flex justify-between">
                                            <Link to={`/menu/${menu_item.id}`} className="btn bg-gray-800 text-white">
                                                Add To Cart
                                            </Link>
                                            <Link to={`/menu/${menu_item.id}`} className="btn bg-yellow-500">
                                                View details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
            </div>
                        </div>
                    ))}

                    
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Menu;