import { sendSuccess } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { trabalhandoService } from '../services/trabalhando.service.js';

export const criarTrabalhando = asyncHandler(async (req, res) => {
    const trabalhando = await trabalhandoService.criarTrabalhando(
        Number(req.params.militarId),
        Number(req.params.secaoId)
    );

    sendSuccess(res, 201, trabalhando, 'Militar ligado à seção com sucesso.');
});

export const deletarTrabalhando = asyncHandler(async (req, res) => {
    await trabalhandoService.deletarTrabalhando(
        Number(req.params.militarId),
        Number(req.params.secaoId)
    );
    sendSuccess(res, 200, 'Militar desligado da seção com sucesso.');
});
