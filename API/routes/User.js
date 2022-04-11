const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./VerifyToken')
const CryptoJs = require('crypto-js');
const Router = require('express').Router();
const User = require('../models/User');
