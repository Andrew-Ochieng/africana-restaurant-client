import { Link } from "react-router-dom";

const MenuItem = ({menu}) => {
    return ( 
        <>
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
                                <Link to={`/menu_item/${menu_item.id}`} className="btn bg-gray-800 text-white">
                                    Add To Cart
                                </Link>
                                <Link to={`/menu_item/${menu_item.id}`} className="btn bg-yellow-500">
                                    View details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default MenuItem;