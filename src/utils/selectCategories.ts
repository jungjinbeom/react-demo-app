import Product from "../types/Product";

export default function selectCategories(products: Product[]): string[] {
  return products.reduce((acc: string[], curr: Product) => {
    const { category } = curr;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
