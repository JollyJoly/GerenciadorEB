import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/db/index.js';
import './src/models/index.js'

import militarRouter from './src/routes/militar.route.js';
import secaoRouter from './src/routes/secao.route.js';
import trabalhandoRouter from './src/routes/trabalhando.route.js';

const app = express()
const port = 3000

app.use(express.json());

app.use('/militares', militarRouter);
app.use('/secoes', secaoRouter);
app.use('/trabalhando', trabalhandoRouter);

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao PostgreSQL com sucesso!');

    await sequelize.sync({ alter: true }); 
    console.log('Tabelas sincronizadas!');

    app.listen({port}, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar o banco:', error);
  }
}

iniciarServidor();