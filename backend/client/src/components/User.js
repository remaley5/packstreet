import React from 'react';


function User(props) {
    return (
        <>
            <strong>name:</strong> {props.user.name}<br />
            <strong>Email:</strong> {props.user.email}<br />
            <hr />
        </>
    );
}
export default User;
