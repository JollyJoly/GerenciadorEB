import { useEffect, useState } from "react";
import API_URL from '../../services/api.js';
import ReturnButton from "../../components/returnButton.jsx";

export default function Militares() {
    const [militares, setMilitares] = useState([]);
    const [secoes, setSecoes] = useState([]);

    useEffect(() => {
        listarMilitares();
    }, []);

    useEffect(() => {
        listarSecoes();
    }, []);

    async function listarMilitares() {
        const res = await fetch(`${API_URL}/militares`);
        const dados = await res.json();

        setMilitares(dados.data);
    }

    async function listarSecoes() {
        const res = await fetch(`${API_URL}/secoes`);
        const dados = await res.json();

        setSecoes(dados.data);
    }

    async function adicionarSecao(militarId, secaoId) {
        try {
            const res = await fetch(`${API_URL}/trabalhando/${militarId}/${secaoId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('Erro ao vincular militar à seção.')
            }

            listarMilitares()
        } catch(erro) {
            console.error("Erro ao realizar requisição: ", erro);   
        }
    }

    async function removerSecao(militarId, secaoId) {
        try {
            const res = await fetch(`${API_URL}/trabalhando/${militarId}/${secaoId}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error('Erro ao desvincular militar à seção.')
            }

            listarMilitares()
        } catch(erro) {
            console.error("Erro ao realizar requisição: ", erro);   
        }
    }

    /*
    async function adicionarMilitar() {
        try {
            const res = await fetch(`${API_URL}/secoes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nomeSecao
                })
            })

            if (!res.ok) {
                throw new Error("Erro ao cadastrar seção.");
            }

            listarSecoes();
            setNomeSecao("");
        } catch (erro) {
            console.error("Erro ao realizar requisição: ", erro);
        }
    }*/

    return (
        <main className="h-screen w-full flex justify-center items-center">
            <ReturnButton />
            <div className="flex flex-col bg-[#749D68] w-3/4 h-3/4 rounded-2xl shadow-xl/30 overflow-hidden text-left">
                <table>
                    <tr className="text-2xl text-white font-bold border-b-3 bg-[#628857]">
                        <th className="p-2 border-r-3">Post. Grad</th>
                        <th className="border-r-3 pl-2">Nome de guerra</th>
                        <th className="pl-2">Seções</th>
                    </tr>
                    {militares.map((militar, index) => (
                        <tr id={militar.id} className="text-xl w-full text-white border-b-3">
                            <td className="p-2 border-r-3">{militar.post_grad}</td>
                            <td className="border-r-3 pl-2">{militar.nome_guerra}</td>
                            <td className="pl-2">
                                <ul className="flex">
                                    {militar.secoes.map((secao, index) => (
                                        <li className="bg-white text-black m-1 pl-2 pr-2 rounded-xl text-sm">
                                            <button id={secao.secao_id} onClick={(e) => removerSecao(militar.id, secao.secao_id)} className="text-bold pl-1 pr-2">-</button>
                                            {secao.nome}
                                        </li>
                                    ))}
                                    <li className="bg-white text-black m-1 pl-2 pr-2 rounded-xl text-sm cursor-pointer">
                                        <select value='' onChange={(e) => {
                                            if (e.target.value) {
                                                adicionarSecao(militar.id, e.target.value);
                                            }
                                        }}>
                                            <option id={militar.id}>+</option>
                                            {secoes.map((secao, index) => (
                                                <option value={secao.secao_id}>{secao.nome}</option>
                                            ))}
                                        </select>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </main>
    )
}