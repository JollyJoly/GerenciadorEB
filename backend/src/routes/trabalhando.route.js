import { Router } from 'express';
import {
  criarTrabalhando,
  deletarTrabalhando
} from '../controllers/trabalhando.controller.js';

const trabalhandoRouter = Router();
trabalhandoRouter.post('/:militarId/:secaoId', criarTrabalhando);
trabalhandoRouter.delete('/:militarId/:secaoId', deletarTrabalhando);

export default trabalhandoRouter;