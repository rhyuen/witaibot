import React, {Component} from "react";

export default ({messages}) => (
    <div className = "history">
        {
            messages.map((msg, index) => {
                const colour = (msg.sender === "bot") ? "bot" : "user";
                return (
                    <div key = {index} 
                        className = {`history__message--${colour}`}>
                        {msg.message}
                    </div>
                );
            })
        }
    </div>
);