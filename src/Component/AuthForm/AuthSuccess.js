import React from 'react';

const AuthSuccess = ({ onLogOut}) => {
    const onLogOutForm = () => {
        onLogOut()
        localStorage.removeItem("auth")
    }

    return (
        <div>
            Hello
            <button onClick={onLogOutForm}>Log out</button>
        </div>
    );
};

export default AuthSuccess;