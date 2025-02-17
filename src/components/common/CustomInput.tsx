import React from "react";

interface inputProps {
  customType: string;
  customOnChange: any;
  myClass?: string;
  myValue: string;
  customPlaceholder: string;
}
const CustomInput = ({
  customOnChange,
  customType,
  myClass,
  myValue,
  customPlaceholder,
}: inputProps) => {
  return (
    <input
      type={customType}
      onChange={customOnChange}
      value={myValue}
      placeholder={customPlaceholder}
      className={`${myClass}`}
    />
  );
};

export default CustomInput;
