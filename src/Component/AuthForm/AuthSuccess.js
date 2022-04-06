import React from 'react';

const AuthSuccess = ({onLogOut, onLogOutAdmin}) => {

    const onLogOutForm = () => {
        onLogOut()
        onLogOutAdmin()
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