import MenuItem from "../components/MenuItem";
// import UseFetch from "../components/UseFetch";
// import { useParams } from "react-router-dom";

const Menu = ({menus, loading, error}) => {

    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                { error && <h4 className="text-red-500">{ error }</h4>}

                <h1 className="text-green-500 font-semibold text-xl m-8 py-2 px-3">
                    Browse All Menus & Menu Items
                </h1>
                <div>
                    {menus && menus.map((menu, index) => (
                        <div key={index} className="m-8 py-2 px-3 rounded-xl">
                            <h3 className="mt-4 md:text-3xl text-xl font-semibold text-gray-800">{menu.name}</h3>
                            <MenuItem menu={menu} />
                        </div>
                    ))}

                    
                </div>
            </div>
        </>
     );
}
 
export default Menu;