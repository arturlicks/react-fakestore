import { produto } from "@/types";
import Card from "../components/card";

export default async function Home() {
  const dados = await fetch("https://fakestoreapi.com/products")
  const dadosConvertidos: produto[] = await dados.json()

  return (
    <div className="flex w-full">
      <nav className="bg-slate-800 text-white w-32">
        <p className="font-bold p-4">Menu</p>
        <ul className="p-6">
          <li>Inicio</li>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="flex flex-wrap gap-4">
        {dadosConvertidos.map((item, indice) => (
          <div key={indice}>
            <Card key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}