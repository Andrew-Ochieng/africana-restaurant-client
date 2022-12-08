import { Link } from "react-router-dom";

const MenuItem = ({menu}) => {
    return ( 
        <>
            <div className="md:flex ">
                {menu.menu_items && menu.menu_items.map((menu_item) => (
                    <div key={menu_item.id} className='md:mr-6 my-6 bg-green-100 p-2 rounded-lg'>
                        <div className="">
                            <img className="rounded-xl h-full w-full" src={menu_item.image_url} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu_item.name}</h3>
                            <p className="my-1">{menu_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                            <h4 className="text-green-500 font-medium">Ksh {menu_item.price}</h4>
                            <div className="my-4">
                                <Link to='' className="bg-yellow-500 hover:bg-gray-800 font-medium hover:text-white duration-300 py-3 px-4 rounded-lg">
                                    Order
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