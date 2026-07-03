import { produto } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function Card(item : produto){

    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-4 w-[20vw] h-[500px]">
            {/* Imagem */}
            <div className="relative w-full h-48 flex items-center justify-center p-4 rounded-xl">
                <Image src={item.image} alt={item.title} fill sizes="20vw" className="object-contain"/>
            </div>
            {/* Conteúdo (cresce) */}
            <div className="flex flex-col flex-1 mt-2">
                <p className="font-extrabold line-clamp-2">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-green-600 font-bold text-lg">${item.price}</p>
                <p className="text-gray-500 text-sm line-clamp-5 mt-1">{item.description}</p>
            </div>
            {/* Botão fixo no final */}
            <Link className="bg-blue-700 rounded text-white p-2 mt-3 text-center" href={`/products/${item.id}`}>Ver Mais</Link>
        </div>
    )
}