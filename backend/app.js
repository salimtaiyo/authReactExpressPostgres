const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db');


// middleware
app.use(bodyParser.json());


// selecting all the users from the database
app.get('/users/all', (req,res,next) => {
    pool.query('SELECT * FROM users', (q_err, q_res) => {
        if(q_err) return next(q_err);
        res.json(q_res.rows);
    })
})

// posting a new user
app.post('/users/new', (req,res,next) => {
    console.log('req.body', req.body);
})

// error handler 
app.use((err,req,res,next) => {
    if(!err.statusCode)err.statusCode = 500;
    res.status(err.statusCode).json({
        type:'error',
        message:err.message
    })
})

module.exports = app;