const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json()); //Informa ao express que será utilizado Json
app.use(routes);

/**
 * Query params: Parametros enviados na rota após ? (request.query)
 * Route params: Parametros utilizados para identificar recursos (/users/:id    /users/1) (request.params)
 * Request body: Corpo da requisição, usado para criar/alterar recurso (request.body)
 */

app.listen(3333);