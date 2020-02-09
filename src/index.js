const express = require('express');
const mongoose = require('mongoose');
const configMongo = require('../userMongo');//dados de conexao com MongoDB Atlas
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${ configMongo.user }:${ configMongo.pass }>@cluster0-g1je0.mongodb.net/${configMongo.dataBase}?retryWrites=true&w=majority`, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(3333);