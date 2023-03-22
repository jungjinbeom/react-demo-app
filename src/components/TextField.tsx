import { ChangeEvent, useState } from "react";

type TextFieldProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  placeholder: string;
};

export default function TextField({
  filterText,
  setFilterText,
  placeholder,
}: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
