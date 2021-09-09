const express = require('express');
const user = require('./user/network');
const app = express();
const config = require('../config');

app.use('/user', user)

app.listen(config.api.port, () => {
    console.log(`Proyecto deployado ${config.api.host}:${config.api.port}`);
})