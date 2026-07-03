import { Product } from "@/types";
import Card from "../components/card";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products")
  const products: Product[] = await response.json()

  return (
    <div className="flex w-full">
      <nav className="bg-slate-800 text-white w-32">
        <p className="font-bold p-4">Menu</p>
        <ul className="p-6">
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex flex-wrap gap-4">
        {products.map((item, index) => (
          <div key={index}>
            <Card key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}