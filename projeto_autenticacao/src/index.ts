import express from 'express';
import errorHandler from './middlewares/error_handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
//const bodyParser = require('body-parser');

const app = express()

//config app
/* 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) 
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// config rotas
app.use(usersRoute);
app.use(statusRoute)

app.use(errorHandler);

app.get("/status", (req, res, next) => {
    res.status(200)
        .send({ foo: 'Teste http sucesso' })
})

app.listen(3000, () => {
    console.log('aplicaçao porta 3000')
})