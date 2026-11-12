import { sendSuccess } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { secaoService } from '../services/secao.service.js';

export const criarSecao = asyncHandler(async (req, res) => {
    const secao = await secaoService.criarSecao(req.body);

    sendSuccess(res, 201, secao, 'Secao criada com sucesso.');
});

export const listarSecaoes = asyncHandler(async (req, res) => {
    const data = await secaoService.listarSecaoes();
    sendSuccess(res, 200, data);
});

export const deletarSecao = asyncHandler(async (req, res) => {
    await secaoService.deletarSecao(Number(req.params.secaoId));
    sendSuccess(res, 200, 'Secao deletada com sucesso.');
});
