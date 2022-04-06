import React, {useState} from 'react';
import AuthForm from "./AuthForm";


const AuthFormContainer = ({onLogIn, onLogInAdmin, admin}) => {
    console.log(admin)
    const [authForm, setAuthForm] = useState({
        name: "",
        password: ""
    })

    const isAdminCheck = () => {
        if (authForm.name === admin.name) {
            if (authForm.password === admin.password) {return onLogInAdmin()}
        }
    }

    const handlerSubmitTrue = (e) => {
        e.preventDefault()
        isAdminCheck()
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
            name: e.target.value
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