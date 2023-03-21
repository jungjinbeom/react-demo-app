import { useRef } from "react";
export default function CheckBoxField({ label }: { label: string }) {
  const id = useRef(`check-${label}`.replace(/  /g, "-").toLowerCase());
  return (
    <div>
      <input type="checkbox" id={id.current} />
      <label htmlFor="only-stock">{label}</label>
    </div>
  );
}
