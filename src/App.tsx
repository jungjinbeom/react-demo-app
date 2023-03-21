import ProducsInCategory from "./components/ProductsInCategory";
import Product from "./types/Product";

const products: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  const categories = products.reduce((acc: string[], curr: Product) => {
    return acc.includes(curr.category) ? acc : [...acc, curr.category];
  }, []);

  return (
    <div className="filterable-products-table">
      <div className="search-bar">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <input type="checkbox" id="only-stock" />
          <label htmlFor="only-stock">Only show products in stock</label>
        </div>
      </div>
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
    </div>
  );
}
