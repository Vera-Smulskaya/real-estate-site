import React, { useState } from "react";
import "./input.css";

export default function Input({
  type,
  name,
  placeholder,
  size,
  children,
  min,
  onChange,
}) {
  const [startValue, setStartValue] = useState();
  const [currentValue, setCurrentValue] = useState();

  const changeValue = (e) => {
    let value = e.target.value;

    if (type === "number" && value !== "") {
      value = Number(value);
    }

    switch (e.type) {
      case "focus":
        setStartValue(value);
        break;

      case "change":
        setCurrentValue(value);
        break;

      default:
        return;
    }
  };

  const handleBlur = () => {
    if (currentValue !== startValue) {
      onChange(name, currentValue);
    }
  };

  return (
    <label>
      {children}
      <input
        type={type}
        name={name}
        id={name}
        value={currentValue}
        min={min}
        placeholder={placeholder}
        onChange={changeValue}
        onFocus={changeValue}
        onBlur={handleBlur}
        autoComplete="off"
        className={`input input_${size}`}
      />
    </label>
  );
}
