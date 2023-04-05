// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const MenuItem = () => {
    const { id } = useParams()
    const { data: menu, isLoading, error} = UseFetch('http://localhost:/menus/' + id)
    console.log(menu)

    return ( 
        <>
            { isLoading && <h4 className="font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {menu && (
                    <div key={menu.id} className='md:mr-6 my-6 bg-green-100 p-2 rounded-lg'>
                        <div className="w-full">
                            <img className="rounded-xl " src={menu.image_url} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu.name}</h3>
                            <p className="my-1">{menu.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                            <h4 className="text-green-500 font-medium">Ksh {menu.price}</h4>
                            
                        </div>
                    </div>
                )}
        </>
     );
}
 
export default MenuItem;