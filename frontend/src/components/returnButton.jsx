import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function ReturnButton() {
    return (
        <button className="absolute top-6 left-6 shadow-xl/20 rounded-full p-2 cursor-pointer">
            <Link to='/'>
                <ArrowLeft size={40} />
            </Link>
        </button>
    )
}