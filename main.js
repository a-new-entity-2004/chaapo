const express = require("express");
const path = require("path");
const fs = require("fs");
var assert = require("assert");
const mongoose = require("mongoose");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
const emailValidator = require("email-validator");
// const bcrypt = require('bcrypt');
const db_link = 'mongodb+srv://ShouryaGoel:Shogo@cluster0.fierrct.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    console.log("db is connected");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const user_info = mongoose.model('user_info', userSchema);

app.use("/static", express.static("static"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req,res) => {
    const cookiea = req.headers.cookie;
    if(cookiea == undefined) {
        res.status(200).render("index.pug");
    } else if (req.headers.cookie.includes("user")) {
        res.status(200).render("home.pug");
    } else {
        res.status(200).render("index.pug");
    }
})

app.post("/login", async (req,res) => {
    let arr = await user_info.find( { email: req.body.emailid} );
    if (arr.length == 0) {
        res.status(200).render("invalidEmail.pug");
    } else {
        let pass = arr[0].password;
        console.log("test1");
        if (pass == req.body.password) {
            res.cookie("user", true, {
                maxAge: 12000000,
                httpOnly: true
            });
            console.log("before");
            res.status(200).render("home.pug");
        } else {
            console.log("hola");
            res.status(200).render("incorrectPassword.pug");
        }
    }
})

app.post("/signup", async (req,res) => {
    let arr = await user_info.find( { email: req.body.emailid} );
    if (arr.length == 0) {
        let user = new user_info({
            email: req.body.emailid,
            password: req.body.password
        });
        user.save()
        .then((req,res) => {
            console.log("hey bro");
        })
        .catch((err) => {
            res.send(err);
        })
        res.cookie("user", true, {
            maxAge: 12000000,
            httpOnly: true
        });
        res.status(200).render("home.pug");
    } else {
        res.status(200).render("userExist.pug");
    }
})

app.get("/home", (req,res) => {
    res.status(200).render("home.pug");
})

app.get("/about", (req,res) => {
    res.status(200).render("about.pug");
})

app.get("/menu", (req,res) => {
    res.status(200).render("menu.pug");
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});