import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }
    return ( 
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password Confirmation</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit">
                        Sign Up
                    </button>
                </form>
                <div>
                    <h3>
                        Have an account already? 
                        <Link to="/login" className="text-red-500">
                            Login
                        </Link>
                    </h3>
                </div>

            </div>
        </>
     );
}
 
export default SignUp;