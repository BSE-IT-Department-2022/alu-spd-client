// src/components/Common/TextInput/TextInput.jsx
import React from "react";
import "./TextInput.scss";

/**
 * TextInput component represents a reusable input element for text-based input fields.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.type - The input type (e.g. 'text', 'email', 'password', etc.).
 * @param {string} [props.placeholder] - The input field placeholder text.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - The callback function to be executed when the input field value changes.
 * @param {string} [props.className] - An optional CSS class name to apply additional styling to the input field.
 * @param {Object} props.otherProps - Any other properties to pass down to the underlying input element.
 */
const TextInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  ...otherProps
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`text-input ${className ? className : ""}`}
      {...otherProps}
    />
  );
};

export default TextInput;
