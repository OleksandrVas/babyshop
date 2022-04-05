import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const AuthForm = ({authForm, handlerSubmit, handlerSubmitFalse, handlerChangeEmail, handlerChangePassword,}) => {


    return (
        <div>
            <div>Please ,log in to get access to all features</div>
            <form onSubmit={authForm.email.length > 12 ? handlerSubmit : handlerSubmitFalse}>
                <input placeholder={"Enter correct email "} value={authForm.email} onChange={handlerChangeEmail}/>
                <input placeholder={"Enter correct password"} value={authForm.password} onChange={handlerChangePassword}
                       type="password"/>
                <MyButton>Log in</MyButton>

            </form>
        </div>
    );
};

export default AuthForm;