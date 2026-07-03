import { produto } from "@/types";
import Link from "next/link";
import Image from "next/image";


export default async function Products({params} : {params : Promise<{ id: string}>}){
    await new Promise((resolve) => setTimeout(resolve,4000))
    const {id} = await params;
    const dados = await fetch(`https://fakestoreapi.com/products/${id}`)
    const dadosConvertidos:produto = await dados.json()
    return (
        <div className="w-full justify-items-center">
            <div className="flex flex-col shadow-xl rounded-2xl p-4 w-xl">
                <div className="relative w-full h-96">
                    <Image src={dadosConvertidos.image} alt={dadosConvertidos.title} fill sizes="(max-width: 768px) 100vw, 36rem" className="object-contain"/>
                </div>
                <p className="font-extrabold p-2">{dadosConvertidos.title}</p>
                <p className="text-gray-500">{dadosConvertidos.category}</p>
                <p className="text-green-600 font-bold">${dadosConvertidos.price}</p>
                <p className="text-gray-500">{dadosConvertidos.description}</p>
                <button className="bg-blue-700 rounded text-white p-2 m-2">Adicionar ao carrinho</button>
                <Link className="bg-gray-400 rounded text-white p-2 m-2 text-center" href={"/"}>Voltar a página principal</Link>
            </div>
        </div>
    )
}