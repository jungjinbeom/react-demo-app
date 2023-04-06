import FilterableProductsTable from "./components/FilterableProductsTable";
import TimerControl from "./components/TimerControl";
import useFetchProducts from "./hooks/useFetchProducts";

export default function App() {
  const products = useFetchProducts();

  return (
    <div>
      <TimerControl />
      <hr />
      <h1>상품</h1>
      <FilterableProductsTable products={products} />
    </div>
  );
}
