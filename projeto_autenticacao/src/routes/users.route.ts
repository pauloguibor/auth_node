import { Router} from "express";
import { rmSync } from "fs";
import {StatusCodes} from 'http-status-codes';
// , NextFunction, Response, Request 
// get users
// get users/:uuid
// post /users
// put /users/:uuid
// delete //users/:uuid

const usersRoute = Router();

usersRoute.get('/users', (req, res, next) => {
    const users = [{userName: "Paulo" }]
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:id', (req, res, next) => {
    if (req.params.id == "Maria"){
        res.status(StatusCodes.OK).send("com parametro Maria");
    }
    res.status(StatusCodes.OK).send(`com parametro Qualquer ${req.params.id}`);
});

usersRoute.post('/post', (req, res, next)=>{
    const bodyConfig = req.body;
    //res.status(StatusCodes.CREATED).send(bodyConfig)
    res.status(200).send(bodyConfig)

})

// req put
usersRoute.put('/users/:id', (req, res, next) =>{
    const id = req.params.id
    const bodyConfig = req.body
    res.status(200).send(bodyConfig)
})

usersRoute.delete('/users/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send(`user deletado ${id}`)
})

// usersRoute.get('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
//     if (req.params.id == "Maria"){
//         res.status(200).send("com parametro Maria");
//     }
//     res.status(200).send("com parametro Qualquer");
// });
export default usersRoute