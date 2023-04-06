import CheckBoxField from "./CheckField";
import TextField from "./TextField";

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  isStockOnly: boolean;
  setIsStockOnly: (value: boolean) => void;
};

export default function SearchBar({
  filterText,
  setFilterText,
  isStockOnly,
  setIsStockOnly,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <TextField
        label="Search"
        text={filterText}
        setText={setFilterText}
        placeholder="Search..."
      />
      <CheckBoxField
        label="Only show products in stock"
        isStockOnly={isStockOnly}
        setIsStockOnly={setIsStockOnly}
      />
    </div>
  );
}
