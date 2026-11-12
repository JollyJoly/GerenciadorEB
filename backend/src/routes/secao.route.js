import { Router } from 'express';
import {
  criarSecao,
  listarSecaoes,
  buscarSecaoPorId,
  deletarSecao
} from '../controllers/secao.controller.js';

const secaoRouter = Router();
secaoRouter.post('/', criarSecao);
secaoRouter.get('/', listarSecaoes);
secaoRouter.get('/secaoId', buscarSecaoPorId);
secaoRouter.delete('/:secaoId', deletarSecao);

export default secaoRouter;