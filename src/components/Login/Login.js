import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.form || '/shop'
    console.log('came from', location.state?.form);
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder='Your Email' /><br />
                    <input type="password" name="" id="" /> <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p>new to ema-john? <Link to='/register'>Create Account</Link></p>
                <div>--------or--------</div>
                <button className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Signin
                </button>
            </div>
        </div>
    );
};

export default Login;