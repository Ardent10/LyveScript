import { PrismTheme } from "prism-react-renderer";
import { ChangeEventHandler } from "react";
import "./index.css";

type ThemeOption = {
  title: string;
  value: PrismTheme;
};
type options = {
  title: string;
  value: string;
};

interface SelectorProps {
  name: string;
  options: options[] | ThemeOption[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  label:string;
}

export function Selector({ name, options, onChange,label }: SelectorProps) {
  return (
    <div className="selector">
        <h3>{label}</h3>
      <select className="select" name={name} id={name} onChange={onChange}>
        {options?.map((option, idx) => (
          <option
            key={idx}
            value={
              typeof option?.value === "string" ? option.value : option.title
            }
          >
            {option?.title}
          </option>
        ))}
      </select>
    </div>
  );
}
