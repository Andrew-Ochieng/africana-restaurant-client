import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true);
    

    return ( 
        <>
            {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <p>
                    Don't have an account? &nbsp;
                    <Link onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Link>
                </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <p>
                    Already have an account? &nbsp;
                    <Link to='/' onClick={() => setShowLogin(true)}>
                    Log In
                    </Link>
                </p>
                </>
            )}
        </>
    );
}
 
export default Login;