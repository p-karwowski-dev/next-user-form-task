"use client";

import { errorClass, fieldClass, labelClass } from "./style";

type Option = { value: string; label: string };

export default function CheckboxList({
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
  defaultValue?: string[];
}) {
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
