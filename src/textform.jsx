import React, {Component} from "react";

export default ({onFormSubmit, onFormChange, onFormValue}) => (
    <div className = "form">
        <form onSubmit = {onFormSubmit} className = "form__container">
            <input 
                className = "form__container__input"
                type = "text" 
                name = "typeform"
                onChange = {onFormChange}
                value = {onFormValue}
                placeholder = "share your thoughts"/>
        </form>
    </div>
);