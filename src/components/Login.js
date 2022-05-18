import React, { useEffect } from "react";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <h2>Please Login</h2>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>

            {error && (
                <p className="text-center text-danger mt-3">{error.message}</p>
            )}
        </>
    );
};

export default Login;
