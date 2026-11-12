import BotaoHome from "./components/botao";

export default function Home() {
    return (
        <main className="h-screen w-full flex justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center bg-[#749D68] w-1/3 h-3/4 rounded-2xl shadow-xl/30">
                <h1 className="text-3xl w-3/4 mb-5 text-white font-bold">REGISTRO DE MILITARES E SEÇÕES</h1>

                <BotaoHome nomeBotao="Militares" />

                <BotaoHome nomeBotao="Seções" />
            </div>
        </main>
    )
}