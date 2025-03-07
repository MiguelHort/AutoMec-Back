import express from 'express';
import cors from 'cors';
import pecaRoutes from './routes/pecaRoutes.js';

const app = express();

app.use(cors());

app.use('/', pecaRoutes);

app.listen(5050, () => {
  console.log("Servidor rodando na porta 5050");
});
