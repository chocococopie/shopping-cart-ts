import type { Product } from "../types";

const products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Laptop2", price: 9999 },
    { id: 3, name: "Laptop3", price: 9999 },
];

const ProductList: React.FC = () => {
  return (
    <div>
        {products.map((p: Product) => (
            <div key={p.id}>
                {p.name}
            </div>
        ))}
    </div>
  )
}

export default ProductList