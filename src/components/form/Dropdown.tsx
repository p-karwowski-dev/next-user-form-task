"use client";

import { errorClass, fieldClass, labelClass } from "./style";

type Option = { value: string; label: string };

export default function Dropdown({
  label,
  name,
  options,
  error,
  defaultValue,
}: {
  label: string;
  name: string;
  options: ReadonlyArray<Option>;
  error?: string;
  defaultValue?: string;
}) {
  return (
    <div className={fieldClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <select
        id={name}
        key={defaultValue}
        name={name}
        defaultValue={defaultValue}
        className="border p-2 pr-8 rounded-xl"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <p className={errorClass}>{error ?? ""}</p>
    </div>
  );
}
