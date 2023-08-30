import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase/supabaseConfig";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        console.log(data)

        if (email && password) {
            if(data) {
                toast.success('User logged in successfully')
                setLoading(true)
                setTimeout(() => {
                    navigate('/menus')
                }, 3000);
            }
        } 

        if (error) {
            setLoading(false)
            toast.error('Please fill in all fields')
        }
     
    }

    const imgUrl = "https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png"


    return ( 
        <>
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
            <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <img src={imgUrl} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleLogin}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
                        <div>   
                            <label htmlFor="email">email</label><br />
                            <input
                                type="email"
                                className="form-input"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="my-2 py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                            {loading ? <p>Loading...</p> : <p>Login</p>}
                        </button>
                    </form>
                    <div>
                        <h3>
                            Don't have an account? 
                            <Link to="/signup" className="text-red-500 font-medium mx-2">
                                Sign Up
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LogIn;