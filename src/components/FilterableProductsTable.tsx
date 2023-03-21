import Product from "../types/Product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

type FilterableProductsTableProps = {
  products: Product[];
};
export default function FilterableProductsTable({
  products,
}: FilterableProductsTableProps) {
  return (
    <div className="filterable-products-table">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
