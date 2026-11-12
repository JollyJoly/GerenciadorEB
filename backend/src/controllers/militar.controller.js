import { sendSuccess } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { militarService } from '../services/militar.service.js';

export const criarMilitar = asyncHandler(async (req, res) => {
    const militar = await militarService.criarMilitar(req.body);

    sendSuccess(res, 201, militar, 'Militar registrado com sucesso.');
});

export const listarMilitares = asyncHandler(async (req, res) => {
    const data = await militarService.listarMilitares();
    sendSuccess(res, 200, data);
});

export const buscarMilitarPorId = asyncHandler(async (req, res) => {
    const militar = await militarService.buscarMilitarPorId(Number(req.params.militarId));
    sendSuccess(res, 200, militar);
});
    
export const atualizarMilitar = asyncHandler(async (req, res) => {
    console.log
    const militar = await militarService.atualizarMilitar(Number(req.params.militarId), req.body);
    sendSuccess(res, 200, militar, 'Militar atualizado com sucesso.');
});

export const deletarMilitar = asyncHandler(async (req, res) => {
    await militarService.deletarMilitar(Number(req.params.militarId));
    sendSuccess(res, 200, 'Militar deletado com sucesso.');
});
