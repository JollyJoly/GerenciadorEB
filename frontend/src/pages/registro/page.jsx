import { useState } from "react";
import API_URL from "../../services/api";
import ReturnButton from "../../components/returnButton";

export default function Registro() {
    const [nome, setNome] = useState("");
    const [nomeGuerra, setNomeGuerra] = useState("");
    const [identMilitar, setIdentMilitar] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [postGrad, setPostGrad] = useState("SDEV");
    const [anosExer, setAnosExer] = useState("");

    async function registrarMilitar(e) {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/militares`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    nome_guerra: nomeGuerra,
                    ident_militar: identMilitar,
                    cpf: cpf,
                    email: email,
                    data_nasc: dataNasc,
                    post_grad: postGrad,
                    anos_exer: Number(anosExer)
                })
            })

            if (!res.ok) {
                const erroApi = await res.json().catch(() => ({}));
                console.error("Detalhes do erro da API:", erroApi);
                throw new Error("Erro ao cadastrar militar.");
            }

            setNome("");
            setNomeGuerra("");
            setIdentMilitar("");
            setCpf("");
            setEmail("");
            setDataNasc("");
            setPostGrad("SDEV");
            setAnosExer("");
        } catch (erro) {
            console.error("Erro ao realizar requisição: ", erro);
        }
    }

    return (
        <main className="h-screen w-full flex justify-center items-center">
            <ReturnButton />
            <form onSubmit={registrarMilitar} className="flex flex-col bg-[#749D68] w-1/3 h-3/4 rounded-2xl shadow-xl/30">
                <h1 className="text-3xl w-full p-3 text-white font-bold border-b-3 rounded-t-2xl bg-[#628857]">Informações</h1>
            
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome do militar" className="outline-none p-2 border-t-2 border-white" />
                <input value={nomeGuerra} onChange={(e) => setNomeGuerra(e.target.value)} type="text" placeholder="Nome de guerra" className="outline-none p-2 border-t-2 border-white" />
                <input value={identMilitar} onChange={(e) => setIdentMilitar(e.target.value)} type="number" placeholder="Identidade militar"
                    className="outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 border-t-2 border-white"
                />
                <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF" className="outline-none p-2 border-t-2 border-white" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="outline-none p-2 border-t-2 border-white" />
                <input value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} type="date" className="outline-none p-2 border-t-2 border-white" />
                <select className="outline-none p-2 border-t-2 border-white">
                    <option>SDEV</option>
                    <option>SDEP</option>
                    <option>CB</option>
                    <option>PSGT</option>
                    <option>SSGT</option>
                    <option>TSGT</option>
                    <option>ST</option>
                    <option>CAD</option>
                    <option>ASP</option>
                    <option>PTEN</option>
                    <option>STEN</option>
                    <option>CAP</option>
                    <option>MAJ</option>
                    <option>TC</option>
                    <option>CEL</option>
                    <option>GENBDA</option>
                    <option>GENDIV</option>
                    <option>GENEX</option>
                    <option>MAR</option>
                </select>
                <input value={anosExer} onChange={(e) => setAnosExer(e.target.value)} type="number" placeholder="Anos de exército"
                    className="outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 border-t-2 border-white"
                />

                <button type="submit" className="self-end bg-[#628857] text-white pt-2 pr-4 pb-2 pl-4 m-5 rounded-xl font-bold cursor-pointer hover:bg-[#496C3E]">
                    Registrar militar
                </button>
            </form>
        </main>
    )
}