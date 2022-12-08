// const Menu = ({menus}) => {

import MenuItem from "../components/MenuItem";

const Menu = ({menus, loading, error}) => {


    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                { error && <h4 className="text-red-500">{ error }</h4>}

                <h1 className="text-green-500 font-semibold text-xl">
                    Menu page is finally here
                </h1>
                <div>
                    {menus.map((menu) => (
                        <div id={menu.id} className="m-8 py-2 px-3 rounded-xl">
                            <h3 className="mt-4 md:text-3xl text-xl font-semibold text-gray-800">{menu.name}</h3>
                            <MenuItem menus={menus} />
                        </div>
                    ))}

                    
                </div>
            </div>
        </>
     );
}
 
export default Menu;