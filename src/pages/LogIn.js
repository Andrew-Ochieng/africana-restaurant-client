import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate("/")
            })
            .catch((error) => console.log(error))
    }


        // function handleSubmit(e) {
        //     e.preventDefault();
        //     fetch("http://localhost:4000/login", {
        //         method: "POST",
        //         headers: {
        //         "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email, password }),
        //     })
        //     .then((res) => {
        //         if (res.ok) {
        //         res.json()
        //         .then((user) => {
        //             console.log(user)
        //             localStorage.setItem("me", JSON.stringify(user))
        //             setUser(user)
        //             navigate("/")
        //         })}
        //     });
        // }

        const imgUrl = "https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png"

    return ( 
        <>
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
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="my-2 py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                            Login
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