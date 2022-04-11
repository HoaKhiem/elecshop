const Router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const dotEnv = require('dotenv');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const userNameFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const passwordFormat = /[ `!^*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//Sigin up route
Router.post("/signup", async (req,res) => {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    if(userNameFormat.test(userName) || userName.length < 6) return res.status(406).json('UserName validattion failed');
    if(!String(userEmail).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return res.status(406).json('Email validation failed');
    if(passwordFormat.test(userPassword) || userName.length < 6) return res.status(406).json('Password validation failed');
    const newUser = new User({
        userName: userName,
        userEmail: userEmail,
        userPassword: CryptoJs.AES.encrypt(userPassword, process.env.PASS_KEY)
    })
    try{
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    }catch(err){
        return res.status(500).json(err);
    }
})

//Login route
Router.post("/login", async (req,res) => {
    const userName = req.body.userName;
    const userPasswordd = req.body.userPassword;
    if(userNameFormat.test(userName) || userName.length < 6) return res.status(406).json('UserName validattion failed');
    if(passwordFormat.test(userPasswordd) || userName.length < 6) return res.status(406).json('Password validation failed');
    try{
        const user = await User.findOne({userName: userName});
        if(!user) return res.status(401).json("Username or password is incorrect");
        const hasedPassword = CryptoJs.AES.decrypt(user.userPassword, process.env.PASS_KEY);
        const passwordd = hasedPassword.toString(CryptoJs.enc.Utf8);
        if(passwordd != userPasswordd) return res.status(401).json("Username or password is incorrect");
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_KEY, {expiresIn: "7d"})
        const {userPassword, ...others} = user._doc;
        console.log(user._doc)
        return res.status(200).json({...others, accessToken});
    }
    catch(err){
        console.log(chalk.bgRed.white(err));
    }
})
module.exports = Router;