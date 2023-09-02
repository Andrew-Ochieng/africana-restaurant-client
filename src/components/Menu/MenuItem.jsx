import { useContext } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { CartContext } from "../../context/cart";

const MenuItem = ({menus, loading, error}) => {
    const { addToCart } = useContext(CartContext)

    const { id } = useParams()
    let paramsId = Number(id)
    let menu = {}
    if (menu) {
        const arr = menus.filter((item) => item.id == paramsId)
        menu = arr[0]
        console.log(arr[0])
    } else {
        menu = {}
    }


    return ( 
        <>
            { error && <h4 className="text-red-500">{ error }</h4>}
            <div className="md:m-16 m-6">
                {loading ? (
                    <div className="flex items-center justify-center md:my-64 my-16">
                        <HashLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Content..."
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    <div key={menu.id} className='grid md:grid-cols-2  gap-4 '>
                        <div className="w-full">
                            <img className="rounded-xl h-80  object-cover" src={menu.imageUrl} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu.name}</h3>
                            <p className="my-1">{menu.description}</p>
                            <h4 className="text-green-500 font-medium mb-4">Ksh {menu.price}</h4>
                            <button 
                                className="btn bg-green-500"
                                onClick={() => addToCart(menu)}
                                >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
        </>
     );
}
 
export default MenuItem;