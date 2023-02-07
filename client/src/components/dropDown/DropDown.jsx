import React, { useState } from "react";
import Select from "react-select";
import "./dropDown.css";

export function DropDown({ options, placeholder, name, value, onChange }) {
  const [currentProperty, setcurrentProperty] = useState(value);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "#4D4F52",
      padding: 20,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "4px",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      margin: "0px",
      backgroundColor: "#74777C",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#74777c88",
    }),

    control: (provided) => ({
      ...provided,
      border: "1px solid #74777C",
      padding: "14px",
      borderRadius: "4px",
      backgroundColor: "white",
    }),

    clearIndicator: (provided) => ({
      ...provided,
      backgroundColor: "#f2e9e9",
      borderRadius: "50%",
      padding: "3px",
      margin: "8px",
    }),

    singleValue: (provided, state) => {
      return { ...provided };
    },
  };

  const getValue = () => {
    return currentProperty
      ? options.find((selected) => selected.value === currentProperty)
      : "";
  };

  const changeValue = (selected, e) => {
    if (e.action === "clear") {
      setcurrentProperty("");
      onChange(name, null);
    } else {
      setcurrentProperty(selected.value);
      onChange(name, selected.value);
    }
  };

  return (
    <div className="dropdown-input">
      <Select
        styles={customStyles}
        placeholder={placeholder}
        onChange={changeValue}
        value={getValue()}
        options={options}
        isClearable
        isDisabled={options.length === 0}
        name={name}
      />
    </div>
  );
}
