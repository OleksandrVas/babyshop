import React from 'react';
import DynamicForm from "../DymanicForm/DynamicForm";

const AuthForm = ({authForm, handlerSubmit, handlerSubmitFalse, handlerChangeEmail, handlerChangePassword,}) => {


    return (
        <div>
            <div>Please ,log in to get access to all features</div>
            <DynamicForm
                placeholderFirst={"Enter correct email"}
                placeholderSecond={"Enter correct password"}
                handlerSubmit={authForm.name.length > 4 ? handlerSubmit : handlerSubmitFalse}
                valueFirst={authForm.name}
                valueSecond={authForm.password}
                handlerChangeSecond={handlerChangePassword}
                handlerChangeFirst={handlerChangeEmail}
                buttonName="Log in"
            />
        </div>
    );
};

export default AuthForm;