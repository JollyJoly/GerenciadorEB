import { Router } from 'express';
import {
  criarSecao,
  listarSecaoes,
  deletarSecao
} from '../controllers/secao.controller.js';

const secaoRouter = Router();
secaoRouter.post('/', criarSecao);
secaoRouter.get('/', listarSecaoes);
secaoRouter.delete('/:secaoId', deletarSecao);

export default secaoRouter;