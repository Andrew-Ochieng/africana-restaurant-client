const MenuItem = ({menus}) => {
    return ( 
        <>
            <div className="md:flex ">
                {/* {menus.menu_items.map((menu_item) => (
                    <div id={menu_item.id} className=''>
                        <h3>{menu_item.name}</h3>
                        <img className="rounded-xl w-72" src={menu_item.image_url} alt="" />
                        <p>{menu_item.description}</p>
                    </div>
                ))} */}
            </div>
        </>
     );
}
 
export default MenuItem;