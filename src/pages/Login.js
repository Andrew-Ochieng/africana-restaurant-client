import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
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
    return ( 
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div>   
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        Sign In
                    </button>
                </form>
                <div>
                    <h3>
                        Don't have an account? 
                        <Link to="/signup" className="text-red-500">
                            Sign Up
                        </Link>
                    </h3>
                </div>
            </div>
        </>
     );
}
 
export default Login;