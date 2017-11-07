import React, {Component} from "react";

export default ({messages}) => (
    <div className = "history">
        {
            messages.map((msg, index) => {
                const sender = (msg.sender === "bot") ? "bot" : "user";
                return (
                    <div key = {index} className = "history__message">
                        <div className = {`history__message__container history__message__container--${sender}-position`}>
                            <div className = {`history__message__container__text 
                                history__message__container__text--${sender}-color`}>
                                {msg.message}
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
);