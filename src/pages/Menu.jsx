import { useState } from "react";
import aboutBanner from "../assets/about-banner.jpg"
import MenuList from "../components/Menu/MenuList";

const Menu = ({menus, loading, error}) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const filteredMenus = menus.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    return ( 
        <>
            <div className="hero md:h-64 h-32" style={{backgroundImage: `url(${aboutBanner})`}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className=" text-neutral-content ">
                    <div className="">
                    <h1 className="mb-5 md:text-4xl text-2xl font-bold">All Foods</h1>
                    </div>
                </div>
            </div>
            
            <div className="md:m-8 m-4 md:flex justify-between space-y-4">
                <div>
                    <input 
                        value={search}
                        onChange={handleSearch}
                        type="search" 
                        className="input border border-gray-300 w-full" 
                        placeholder="Search foods.." 
                    />
                </div>

                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Categories</option>
                    <option value=''>Salads</option>
                    <option value=''>Meat</option>
                    <option value=''>Soup</option>
                    <option value=''>Vegan</option>
                </select>
            </div>

            <MenuList filteredMenus={filteredMenus} loading={loading} error={error} />
            
        </>
     );
}
 
export default Menu;