import { Secao } from '../models/index.js'
import { ApiError } from '../utils/apiError.js';

export const secaoService = {
    async criarSecao(data) {
        return await Secao.create(data);
    },

    async listarSecoes() {
        const secoes = await Secao.findAll();

        return secoes;
    },

    async buscarSecaoPorId(id) {
        const secao = await Secao.findByPk(id);

        if (!secao) {
            throw ApiError.notFound('Não há nenhuma secao com esse id.')
        }

        return secao;
    },

    async deletarSecao(id) {
        const secao = await Secao.findByPk(id);

        if (!secao) {
            throw ApiError.notFound('Não há nenhuma secao com esse id.')
        }

        secao.destroy();
    }
}