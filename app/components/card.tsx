import { produto } from "@/types";

export default function Card(item: produto) {
    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-4 w-[20vw] h-10/12">
            <div className="w-full h-48 flex items-center justify-center p-4 rounded-xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-2">
                <p className="font-extrabold">{item.title}</p>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-green-600 font-bold">${item.price}</p>
                <p className="text-gray-500 h-20 overflow-scroll scrollbar-track-transparent">{item.description}</p>
            </div>
            <button className="bg-blue-700 rounded text-white p-2 m-2">Ver Mais</button>
        </div>
    )
}