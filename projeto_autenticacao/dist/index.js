"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/status", (req, res, next) => {
    res.status(200)
        .send({ foo: 'Teste http' });
});
app.listen(3000, () => {
    console.log('aplicaçao porta 3000');
});
