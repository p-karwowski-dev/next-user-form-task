"use client";

import { errorClass, fieldClass, labelClass } from "./style";

type Option = { value: string; label: string };

export default function Dropdown({
  label,
  name,
  options,
  error,
  multiple = false,
  defaultValue,
}: {
  label: string;
  name: string;
  options: ReadonlyArray<Option>;
  error?: string;
  multiple?: boolean;
  defaultValue?: string | string[];
}) {
  if (multiple) {
    const selected = Array.isArray(defaultValue) ? defaultValue : [];
    return (
      <div className={fieldClass}>
        <span className={labelClass}>{label}</span>
        <div className={`border p-2 rounded-xl ${fieldClass}`}>
          {options.map((opt) => (
            <label
              key={opt.value}
              htmlFor={`${name}-${opt.value}`}
              className="flex items-center gap-2 text-sm"
            >
              <input
                id={`${name}-${opt.value}`}
                type="checkbox"
                name={name}
                value={opt.value}
                defaultChecked={selected.includes(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
        <p className={errorClass}>{error ?? ""}</p>
      </div>
    );
  }

  return (
    <div className={fieldClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <select
        id={name}
        key={defaultValue as string}
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
