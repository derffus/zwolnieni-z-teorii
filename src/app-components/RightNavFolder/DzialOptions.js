import React from "react";
import Select from "react-select";

const classOptions = {
  podstawa1: [
    { value: "1", label: "I" },
    { value: "2", label: "II" },
  ],
  rozszerzenie1: [
    { value: "1", label: "Zbiory liczbowe. Liczby rzeczywiste" },
    { value: "2", label: "Wyrażenia algebraiczne" },
  ],
};

function DzialOptions(props) {
  const { classType, updateState } = props;
  const options = classOptions[classType] || [];

  return (
    <Select
      options={options}
      className="content-picker-select"
      onChange={(selectedOption) => {
        updateState("dzial", selectedOption.value);
      }}
    />
  );
}

export default DzialOptions;
