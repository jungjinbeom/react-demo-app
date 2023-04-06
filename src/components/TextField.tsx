import { ChangeEvent, useRef } from "react";

type TextFieldProps = {
  label: string;
  text: string;
  setText: (value: string) => void;
  placeholder: string;
};

export default function TextField({
  label,
  text,
  setText,
  placeholder,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
