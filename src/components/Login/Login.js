import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInGoogle } = useAuth();
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
                    onClick={signInGoogle}
                >Google Signin
                </button>
            </div>
        </div>
    );
};

export default Login;