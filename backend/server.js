const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const routes = require('./src/Routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(3001,()=>{

    console.log("ON");

})