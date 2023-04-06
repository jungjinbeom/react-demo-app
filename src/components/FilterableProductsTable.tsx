import { useEffect, useState } from "react";
import Product from "../types/Product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import filterProducts from "../utils/filterProducts";

type FilterableProductsTableProps = {
  products: Product[];
};
export default function FilterableProductsTable({
  products,
}: FilterableProductsTableProps) {
  useEffect(() => {}, []);
  const [filterText, setFilterText] = useState<string>("");
  const [isStockOnly, setIsStockOnly] = useState<boolean>(false);

  const filteredProducts = filterProducts(products, {
    filterText,
    isStockOnly,
  });
  return (
    <div className="filterable-products-table">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        isStockOnly={isStockOnly}
        setIsStockOnly={setIsStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
