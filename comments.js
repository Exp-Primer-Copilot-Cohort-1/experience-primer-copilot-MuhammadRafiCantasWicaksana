// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database
const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: ''
        }
    ]
};
