import React, {Component} from "react";

export default ({onFormSubmit, onFormChange, onFormValue}) => (
    <div className = "form">
        <form onSubmit = {onFormSubmit}>
            <input 
                type = "text" 
                name = "typeform"
                onChange = {onFormChange}
                value = {onFormValue}
                placeholder = "share your thoughts"/>
        </form>
    </div>
);