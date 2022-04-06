import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const DynamicForm = ({
                         handlerSubmit,
                         buttonName,
                         valueFirst,
                         placeholderFirst,
                         placeholderSecond,
                         valueSecond,
                         handlerChangeFirst,
                         handlerChangeSecond,
                         typeOfPlaceholder = "password"
                     }) => {
    return (
        <form onSubmit={handlerSubmit}>
            <input placeholder={placeholderFirst} value={valueFirst} onChange={handlerChangeFirst}/>
            <input placeholder={placeholderSecond} value={valueSecond} onChange={handlerChangeSecond}
                   type={typeOfPlaceholder}/>
            <MyButton>{buttonName}</MyButton>
        </form>
    );
};

export default DynamicForm;