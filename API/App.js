const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')
const App = express();
const authRoute = require('./routes/Auth')
//App initial
App.use(express.json());
//get Port of app
const PORT = process.env.PORT || 8000;

//dotenv initial
dotenv.config();
//connect to mongodb
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(chalk.bgGreen.white('Connected to Mongodb'))
}).catch((err) => {
    console.log(chalk.bgRed.white(err));
})

//set images path
App.use("/api/images", express.static(path.join(__dirname, "/images")));

//Use routes
App.use("/api/auth", authRoute);

App.listen(PORT, () => {
    console.log(chalk.bgBlue.white.bold(`App starting on port ${PORT}`))
})