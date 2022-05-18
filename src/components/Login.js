import React from "react";
import auth from "../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <h2>Please Login</h2>
                <button onClick={() => signInWithGoogle()} className="btn btn-primary">
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
