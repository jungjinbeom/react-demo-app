import { useRef } from "react";

type CheckBoxFieldProps = {
  label: string;
  isStockOnly: boolean;
  setIsStockOnly: (value: boolean) => void;
};

export default function CheckBoxField({
  label,
  isStockOnly,
  setIsStockOnly,
}: CheckBoxFieldProps) {
  const id = useRef(`check-${label}`.replace(/  /g, "-").toLowerCase());

  const handleChange = () => {
    setIsStockOnly(!isStockOnly);
  };
  return (
    <div>
      <input
        type="checkbox"
        id={id.current}
        checked={isStockOnly}
        onChange={handleChange}
      />
      <label htmlFor="only-stock">{label}</label>
    </div>
  );
}
