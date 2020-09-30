import React from 'react';
import {Breadcrumbs, Link} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import LogoutButton from "./session/LogoutButton";


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a link');
}

export default function SimpleBreadcrumbs() {
    return (
        <Breadcrumbs>
            <NavLink to="/">
                home
            </NavLink>
            <NavLink to="/package/1">
                package
            </NavLink>
            <NavLink to="/my-packages">
                my designs
            </NavLink>
            <LogoutButton/>
        </Breadcrumbs>
    );
};
