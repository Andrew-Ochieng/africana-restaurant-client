import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { auth } from "../firebase/config"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log(user)
        //         alert("User account has been succesfully created")
        //         navigate("/")
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         // const errorMessage = error.message;
        //         alert(errorCode)
        //     });
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:4000/signup", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             username,
    //             email,
    //             address,
    //             password,
    //             password_confirmation: passwordConfirmation,
    //         }),
    //     })
    //     .then((res) => {
    //         if (res.ok) {
    //           res.json().then((user) => {
    //             console.log(user)
    //               setUser(user)
    //               navigate('/')
    //               localStorage.setItem("me", JSON.stringify(user))
    //           });
    //         }
    //     });
    // }

    const imgUrl = "https://img.freepik.com/free-vector/realistic-illustration-roasted-turkey-grilled-chicken-with-spices-vegetables_1441-1789.jpg?w=1380&t=st=1670450632~exp=1670451232~hmac=69975cba4f68f9f6609e991e64b066995e838c70710200fbd6f427399c53fdfe"

    return ( 
        <>
            <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
                <div className="md:w-1/2 md:mr-8">
                    <img className="" src={imgUrl} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">Sign Up</h1>
                        {/* <div>
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div> */}
                        <div>
                            <label htmlFor="email">Email</label><br />
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
                                value={password}
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="my-2 py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <h3>
                            Have an account already? 
                            <Link to="/login" className="text-red-500 font-medium mx-2">
                                Login
                            </Link>
                        </h3>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default SignUp;