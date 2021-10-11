import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <span style={{ color: 'white' }}>{user.displayName}</span>
                {
                    user.email ?
                        <button onClick={logout}>LogOut</button>
                        :
                        <NavLink to="/login">LogIn</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;