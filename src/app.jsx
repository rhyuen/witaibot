import React, {Component} from "react";
import History from "./history.jsx";
import TextForm from "./textform.jsx";

class App extends Component{
    state = {
        history: ["one", "two", "three"],
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
                }else{
                    console.log("I can't handle that.");
                }
                
            }).catch(err => {
                console.log(err);
            });

        const updated = this.state.history.concat(this.state.typeFormValue);        
        this.setState(prevState => {                        
            return {
                ...prevState,
                history: updated,
                typeFormValue: ""
            };
        });
    }

    render(){        
        return (
            <div>
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