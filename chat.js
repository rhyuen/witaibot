const {Wit, log} = require("node-wit");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config.js");
const app = express();
const PORT = 7678;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const client = new Wit({
    accessToken: config.witaikey
    // logger: new log.Logger(log.DEBUG)
});


app.get("/", (req, res) => {    
    client.message("set an alart tomorrow at 7am")
        .then(data => {
            console.dir(data);        
            res.status(200).json({message: data});
        }).catch(err => {
            console.log(err);
        });    
});

app.get("/what", (req, res) => {
    client.message("what's the temperature?")
        .then(data => {
            res.status(200).json({message: data});
        }).catch(err => {
            console.log(err);
        });
});

app.post("/random", (req, res) => {
    const msg = req.body.text;
    client.message(msg)
        .then(data => {
            console.log(data);
            res.status(200).json({message: data})
        }).catch(err => {
            console.log(err);
        });
});


app.listen(PORT, () => {
    console.log(7678);
});






