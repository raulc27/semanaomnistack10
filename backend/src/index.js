const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const {setupWebsocket} = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);


app.use(cors());

app.use(express.json());

app.use(routes);




mongoose.connect('mongodb://login:SENHA@CLUSTER,CLUSTER,CLUSTER_DETAILS',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


/*


Métodos HTTP: GET, POST, PUT, DELETE

Tipos de parâmetros:

Query Params: request.query (Filtros, ordenação, paginação)
Route Params: request.params (Identificar um recurso na alteração ou remoção)
Body: request.body (Dados para criação ou alteração de um registro)


*/




server.listen(3333);

