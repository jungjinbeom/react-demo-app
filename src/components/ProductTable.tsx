import Product from "../types/Product";
import selectCategories from "../utils/selectCategories";
import ProducsInCategory from "./ProductsInCategory";

type ProductTableProps = { products: Product[] };
export default function ProductTable({ products }: ProductTableProps) {
  const categories = selectCategories(products);
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <ProducsInCategory
            key={category}
            category={category}
            products={products}
          />
        ))}
      </tbody>
    </table>
  );
}
