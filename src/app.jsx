import React, {Component} from "react";
import History from "./history.jsx";
import TextForm from "./textform.jsx";
import Header from "./header.jsx";

class App extends Component{
    state = {
        history: [{
            sender: "bot",
            message: "Bot Message"
        }, {
            sender: "bot",
            message: "Another Bot message."
        }, {
            sender: "user",
            message: "user message"
        }, {
            sender: "user",
            message: "another user message."
        }, {
            sender: "bot",
            message: "bot bot message."
        }],
        typeFormValue: ""
    }

    handleTypeFormChange = (e) => {
        const latest = e.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                typeFormValue: latest
            };
        });
    }

    handleTypeFormSubmit = (e) => {        
        e.preventDefault();
        const updated = this.state.history.concat({
            sender: "user", 
            message: this.state.typeFormValue
        });        
        this.setState(prevState => {                        
            return {
                ...prevState,
                history: updated,
                typeFormValue: ""
            };                
        });
        const fetchOptions = {
            method: "post",
            headers:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `text=${this.state.typeFormValue}`
        };
        fetch("http://localhost:7678/random", fetchOptions)
            .then(data => data.json())
            .then(data => {  
                if(data.message.entities.intent){
                    console.log(data.message.entities.intent[0].confidence);
                    console.log(data.message.entities.intent[0].value);     
                    const response = this.state.history.concat({
                        sender: "bot",
                        message: `CONFIDENCE: ${data.message.entities.intent[0].confidence} VALUE: ${data.message.entities.intent[0].value}`
                    });

                    this.setState(prevState => {
                        return {
                            ...prevState,
                            history: response
                        };
                    });
                }else{                    
                    const failureMessage = this.state.history.concat({
                        sender: "bot",
                        message: "Sorry, I can't handle that question."
                    });
                    this.setState(prevState => {
                        return {
                            ...prevState,
                            history: failureMessage                            
                        };
                    });
                }

               
                
            }).catch(err => {
                console.log(err);
            });              
    }

    render(){        
        return (
            <div className = "root">
                <Header/>
                <History messages = {this.state.history}/>
                <TextForm
                    onFormSubmit = {this.handleTypeFormSubmit}
                    onFormChange = {this.handleTypeFormChange}
                    onFormValue = {this.state.typeFormValue}/>
            </div>
        );
    }
}

export default App;