const Menu = () => {
    return ( 
        <>
            <div>
                <h1 className="text-red-500 font-medium text-lg">
                    Menu page coming soon...
                </h1>
                <div>
                    {menu_items.map((menu_item) => (
                        <div id={menu_item.id}>
                            <h3>{menu_item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Menu;