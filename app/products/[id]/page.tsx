import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";


export default async function Products({params} : {params : Promise<{ id: string}>}){
    await new Promise((resolve) => setTimeout(resolve,4000))
    const {id} = await params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product:Product = await response.json()
    return (
        <div className="w-full justify-items-center">
            <div className="flex flex-col shadow-xl rounded-2xl p-4 w-xl">
                <div className="relative w-full h-96">
                    <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 36rem" className="object-contain"/>
                </div>
                <p className="font-extrabold p-2">{product.title}</p>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-green-600 font-bold">${product.price}</p>
                <p className="text-gray-500">{product.description}</p>
                <button className="bg-blue-700 rounded text-white p-2 m-2">Add to cart</button>
                <Link className="bg-gray-400 rounded text-white p-2 m-2 text-center" href={"/"}>Back to home page</Link>
            </div>
        </div>
    )
}