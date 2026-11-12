import { Router } from 'express';
import {
  criarMilitar,
  listarMilitares,
  buscarMilitarPorId,
  atualizarMilitar,
  deletarMilitar
} from '../controllers/militar.controller.js';

const militarRouter = Router();
militarRouter.post('/', criarMilitar);
militarRouter.get('/', listarMilitares);
militarRouter.get('/:militarId', buscarMilitarPorId);
militarRouter.put('/:militarId', atualizarMilitar);
militarRouter.delete('/:militarId', deletarMilitar);

export default militarRouter;