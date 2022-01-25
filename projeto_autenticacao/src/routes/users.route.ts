import { Router} from "express";
import { rmSync } from "fs";
import {StatusCodes} from 'http-status-codes';
import userRepository from "../repositories/user.repository";
// , NextFunction, Response, Request 
// get users
// get users/:uuid
// post /users
// put /users/:uuid
// delete //users/:uuid

const usersRoute = Router();


usersRoute.get('/users', async (req, res, next) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userRepository.findById(id);
        res.status(StatusCodes.OK).send(user);
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req, res, next) => {
    const newUser = req.body;
    const id = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(id);
});

// req put
usersRoute.put('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    const modifiedUser = req.body;

    modifiedUser.id = id;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    await userRepository.remove(id);
    res.sendStatus(StatusCodes.OK);
});

// usersRoute.get('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
//     if (req.params.id == "Maria"){
//         res.status(200).send("com parametro Maria");
//     }
//     res.status(200).send("com parametro Qualquer");
// });
export default usersRoute