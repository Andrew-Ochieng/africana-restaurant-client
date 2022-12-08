import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

        function handleSubmit(e) {
            e.preventDefault();
            fetch("/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
                .then((res) => {
                    if (res.ok) {
                        res.json().then((user) => setUser(user));
                    }
                })
        }

        const imgUrl = "https://img.freepik.com/free-vector/vegetables-colored-icons-flat-set_1284-34003.jpg?w=826&t=st=1670450499~exp=1670451099~hmac=659475ce48e960ba82b37847a67f46c552f3bd109ed902ce5169f1170c65b0f9"

    return ( 
        <>
            <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
                <div className="md:w-1/2">
                    <img src={imgUrl} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
                        <div>   
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                            Sign In
                        </button>
                    </form>
                    <div>
                        <h3>
                            Don't have an account? 
                            <Link to="/signupform" className="text-red-500 font-medium mx-2">
                                Sign Up
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LoginForm;