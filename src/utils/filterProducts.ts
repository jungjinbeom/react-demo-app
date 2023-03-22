import Product from "../types/Product";

function normlize(text: string) {
  return text.trim().toLocaleLowerCase();
}
type FilterConditions = {
  filterText: string;
  isStockOnly: boolean;
};

export default function filterProducts(
  products: Product[],
  { filterText, isStockOnly }: FilterConditions
): Product[] {
  const filteredProducts = products.filter(
    (product) => !isStockOnly || product.stocked
  );

  const query = normlize(filterText);

  if (!query) {
    return filteredProducts;
  }

  const contains = (product: Product) =>
    product.name.toLowerCase().includes(query);

  return filteredProducts.filter(contains);
}
