import React, {useState} from 'react';
import AuthForm from "./AuthForm";

const AuthFormContainer = ({onLogIn}) => {
    const [authForm, setAuthForm] = useState({
        email: "",
        password: ""
    })

    console.log(authForm)

    const handlerSubmitTrue = (e) => {
        e.preventDefault()
        onLogIn()
        localStorage.setItem("auth", "true")
    }
    const handlerSubmitFalse = (e) => {
        e.preventDefault()
        alert("Please enter correct email or password  ")
    }

    const handlerChangeEmail = (e) => {
        setAuthForm(() => ({
            ...authForm,
            email: e.target.value
        }))
    }
    const handlerChangePassword = (e) => {
        setAuthForm(() => ({
            ...authForm,
            password: e.target.value
        }))
    }


    return (
        <AuthForm handlerSubmit={handlerSubmitTrue}
                  handlerSubmitFalse={handlerSubmitFalse}
                  handlerChangeEmail={handlerChangeEmail}
                  handlerChangePassword={handlerChangePassword}
                  authForm={authForm}
        />
    );
};

export default AuthFormContainer;