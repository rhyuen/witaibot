import React, {Component} from "react";

export default ({messages}) => (
    <div className = "history">
        {
            messages.map((msg, index) => {
                return (
                    <div key = {index}>{msg}</div>
                );
            })
        }
    </div>
);