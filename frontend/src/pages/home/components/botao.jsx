import { Link } from "react-router-dom";

export default function BotaoHome({ nomeBotao }) {
    return (
        <button className="cursor-pointer bg-[#FFF49E] m-5 w-3/4 pt-3 pb-3 text-3xl rounded-xl transition hover:bg-[#CEC266]">
            <Link to={nomeBotao == 'Militares' ? 'militares' : 'secoes'}>
                {nomeBotao}
            </Link>
        </button>
    )
}