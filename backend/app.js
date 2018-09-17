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
    const { username, password } = req.body;
    pool.query('SELECT * FROM users WHERE username = $1', 
    [username],
    (q0_err, q0_res) => {
        if(q0_err) { return   next(q0_err)}
        if(q0_res.rows.length === 0){
            pool.query('INSERT INTO users(username,password) VALUES($1,$2)',
            [username,password],
            (q1_err,q1_res) => {
                if(q1_err) {return next(q1_err)}
            }
        )
        }
        else{
            res.status(409).json({
                type: 'error',
                msg: 'this username has alraedy been taken'
            });
        }
    } 
)
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