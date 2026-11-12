import { Trabalhando } from '../models/index.js'
import { ApiError } from '../utils/apiError.js';
import { militarService } from './militar.service.js';
import { secaoService } from './secao.service.js';

export const trabalhandoService = {
    async militarTrabalhaNaSecao(militarId, secaoId) {
        await militarService.buscarMilitarPorId(militarId);
        await secaoService.buscarSecaoPorId(secaoId);

        const trabalhando = await Trabalhando.findOne({
            where: {
                cod_militar: militarId,
                cod_secao: secaoId
            }
        })

        if (!trabalhando) {
            return null;
        }

        return trabalhando;
    },

    async criarTrabalhando(militarId, secaoId) {
        const trabalhando = await this.militarTrabalhaNaSecao(militarId, secaoId);

        if (trabalhando) {
            throw ApiError.badRequest('Esse militar já está nessa seção.')
        }

        return await Trabalhando.create({
            cod_militar: militarId,
            cod_secao: secaoId
        });
    },

    async deletarTrabalhando(militarId, secaoId) {
        const trabalhando = await this.militarTrabalhaNaSecao(militarId, secaoId);

        if (!trabalhando) {
            throw ApiError.notFound('Esse militar não está nessa seção.')
        }

        trabalhando.destroy();
    }
}