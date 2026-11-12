import { Router } from 'express';
import {
  criarSecao,
  listarSecoes,
  buscarSecaoPorId,
  deletarSecao
} from '../controllers/secao.controller.js';

const secaoRouter = Router();
secaoRouter.post('/', criarSecao);
secaoRouter.get('/', listarSecoes);
secaoRouter.get('/secaoId', buscarSecaoPorId);
secaoRouter.delete('/:secaoId', deletarSecao);

export default secaoRouter;