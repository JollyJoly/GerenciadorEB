import { Militar, Secao, Trabalhando } from '../models/index.js'
import { ApiError } from '../utils/apiError.js';

export const militarService = {
    async criarMilitar(data) {
        return await Militar.create(data);
    },

    async listarMilitares() {
        const militares = await Militar.findAll({
            include: [
                {
                    model: Secao,
                    as: 'secoes',
                    attributes: ['secao_id', 'nome'],
                    through: { attributes: [] },
                },
            ],
        });

        const militaresMap = militares.map(
            militar => ({
                id: militar.militar_id,
                post_grad: militar.post_grad,
                nome_guerra: militar.nome_guerra,
                identidade: militar.ident_militar,
                secoes: militar.secoes
            })
        );

        return militaresMap;
    },

    async buscarMilitarPorId(id) {
        const militar = await Militar.findByPk(id);

        if (!militar) {
            throw ApiError.notFound('Não há nenhum militar com esse id.')
        }

        return militar;
    },

    async atualizarMilitar(id, data) {
        const militar = await this.buscarMilitarPorId(id);

        militar.set(data);
        await militar.save();

        return militar
    },

    async deletarMilitar(id) {
        const militar = await this.buscarMilitarPorId(id);

        militar.destroy();
    }
}