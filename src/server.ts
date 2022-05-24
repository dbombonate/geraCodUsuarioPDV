import 'express-async-errors';
import 'dotenv/config';
import express, { Application, Request, Response, NextFunction } from "express";
import cors from 'cors';

import { GenerateBarCodeController } from "./controller/GenerateBarCodeController";

const app: Application = express();
const port = process.env.APP_PORT;

const generateBarCodeController = new GenerateBarCodeController();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/', generateBarCodeController.handle );
app.get('/', (req,res) => {
  res.send({msg: "Criar código de barra para operadores fiscais."})
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    console.log(err);
    return res.status(400).send({ erro: err.message });
  }

  return res.status(500).send({ erro: "Internal Server Error"});
})

app.listen(port, () => console.log('Server is Running'));
