import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const AuthForm = ({ onLogIn}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        onLogIn()
        localStorage.setItem("auth" , "true")
    }


    return (
        <div>
            <div>Please ,log in to get access to all features </div>
            <form onSubmit={onSubmit}>
                <input placeholder={"Enter your email"}/>
                <input placeholder={"Enter your password"}/>
                <MyButton >Log in</MyButton>

            </form>
        </div>
    );
};

export default AuthForm;