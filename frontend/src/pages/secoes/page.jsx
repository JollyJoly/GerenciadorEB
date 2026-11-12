import { useEffect, useState } from "react";
import API_URL from '../../services/api.js';
import ReturnButton from "../../components/returnButton.jsx";
import { Trash } from "lucide-react";

export default function Secoes() {
    const [secoes, setSecoes] = useState([]);
    const [nomeSecao, setNomeSecao] = useState([]);

    const handleChange = (e) => {
        setNomeSecao(e.target.value);
    }

    useEffect(() => {
        listarSecoes();
    }, []);

    async function listarSecoes() {
        const res = await fetch(`${API_URL}/secoes`);
        const dados = await res.json();

        setSecoes(dados.data);
    }

    async function adicionarSecao() {
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
    }

    async function deletarSecao(secaoId) {
        try {
            const res = await fetch(`${API_URL}/secoes/${secaoId}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error('Erro ao deletar seção.')
            }

            listarSecoes()
        } catch(erro) {
            console.error("Erro ao realizar requisição: ", erro);   
        }
    }

    return (
        <main className="h-screen w-full flex justify-center items-center">
            <ReturnButton />
            <div className="flex flex-col bg-[#749D68] w-1/3 h-3/4 rounded-2xl shadow-xl/30 overflow-hidden">
                <h1 className="text-3xl w-full p-3 text-white font-bold border-b-3 bg-[#628857]">Seções</h1>

                <ul className="flex-1 overflow-y-auto">
                    {secoes.map((secao, index) => (
                        <li key={secao.id} className="flex text-xl w-full p-3 text-white border-b-3">
                            <button onClick={() => deletarSecao(secao.secao_id)}
                                className="inline-flex items-center justify-center text-black mr-2 w-8 h-8 rounded-md cursor-pointer hover:bg-black/10">
                                <Trash size={20} className="shrink-0" />
                            </button>
                            {secao.nome}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between text-xl w-full p-2 bg-[#628857] text-white border-b-2 border-t-2">
                    <input type="text" placeholder="Nome da seção" onChange={handleChange} value={nomeSecao} className="w-9/10 outline-none" />
                    <button onClick={adicionarSecao} className="pr-3 pl-3 bg-white text-black rounded-xl cursor-pointer">+</button>
                </div>
            </div>
        </main>
    )
}