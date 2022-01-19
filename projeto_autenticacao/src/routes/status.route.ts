import { Router} from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

statusRoute.get('/status', (req, res, next) => {
    res.sendStatus(StatusCodes.OK)
})

export default statusRoute