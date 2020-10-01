import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from "./session/LogoutButton";


export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <NavLink className='navbar__link navbar__home' to="/">
                    home
                </NavLink>
                <NavLink className='navbar__link navbar__package' to="/package/1">
                    package
                </NavLink>
                <NavLink className='navbar__link navbar__my-packages' to="/my-packages">
                    my designs
                </NavLink>
                <NavLink className='navbar__link navbar__design' to="/design">
                    design
                </NavLink>
                <LogoutButton />
            </div>
        </div>
    );
};
