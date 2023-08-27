import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../../supabase/supabaseConfig';

const AddMenus = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleAddMenus = async (e) => {
        e.preventDefault()

        if (name && description && price && imageUrl !== "") {
            const { data, error } = await supabase
                .from('menus')
                .insert([{name, description, price, imageUrl}])
                .select()

            if (data) {
                console.log(data)
            }

            if (error) {
                console.log(error)
            }
            
            toast.success('New Menu Addedd Successfully')

            setName('')
            setPrice('')
            setImageUrl('')
            setDescription('')
        } else {
            toast.error('Please fill in all inputs')
        }
    }

    return ( 
        <>
            <div className="flex flex-col items-center md:m-20 my-10 mx-4">
                <h3 className="md:mb-8 mb-4 font-semibold md:text-3xl text-xl text-gray-700">Add New Menu</h3>
                <ToastContainer 
                    position = 'top-center'
                    autoClose = {2000}
                    hideProgressBar = {true}
                    closeOnClick = {true}
                    pauseOnHover = {true}
                    draggable = {true}
                    progress = {undefined}
                    theme= 'colored'
                />
                <div >
                    <form action="">
                        <div className="label">
                            <input 
                                className="input w-full border border-cyan-500" 
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter name..." 
                                required 
                            />
                        </div>
                        <div className="label">
                            <input 
                                className="input w-full border border-cyan-500" 
                                type="number" 
                                name="price" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price..." 
                                required 
                            />
                        </div>
                        <div className="label">
                            <input 
                                className="input w-full border border-cyan-500" 
                                type="text" 
                                name="image-url" 
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter image_url..." 
                                required 
                            />
                        </div>
                        <div className="label">
                            <textarea 
                                className="border border-cyan-500 py-2 px-3 rounded-lg w-full outline-none" 
                                name="description" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Write content..." 
                                cols="30" 
                                rows="6"
                            >
                            </textarea>
                        </div>
                        <button 
                            className="btn hover:bg-green-600 bg-green-500 w-full mt-4"
                            onClick={handleAddMenus}
                            >
                            Add Menu
                        </button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default AddMenus;