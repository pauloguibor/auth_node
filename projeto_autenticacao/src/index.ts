import express from 'express'
import { rmSync } from 'fs'
const app = express()

app.use("/status", (req, res, next) => {
    res.status(200)
    .send({foo: 'Teste http sucesso'})
})

app.listen(3000, () => {
    console.log('aplicaçao porta 3000')
})