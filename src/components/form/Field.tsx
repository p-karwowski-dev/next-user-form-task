import { HTMLInputTypeAttribute } from "react";
import { errorClass, fieldClass, labelClass } from "./style";

export default function Field({
  label,
  name,
  error,
  type,
  defaultValue,
}: {
  label: string;
  name: string;
  error?: string;
  type: HTMLInputTypeAttribute;
  defaultValue?: string;
}) {
  return (
    <div className={fieldClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="border p-2 rounded-xl"
      />
      <p className={errorClass}>{error ?? ""}</p>
    </div>
  );
}
