// src/components/Common/Button/Button.jsx
import React from "react";
import "./Button.scss";

/**
 * Button component represents a reusable button element that can be used throughout the application.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed within the button.
 * @param {Function} props.onClick - The callback function to be executed when the button is clicked.
 * @param {string} [props.className] - An optional CSS class name to apply additional styling to the button.
 * @param {Object} props.otherProps - Any other properties to pass down to the underlying button element.
 */
const Button = ({ children, onClick, className, ...otherProps }) => {
  return (
    <button
      // Apply the 'btn' class along with any additional className, if provided
      className={`btn ${className ? className : ""}`}
      onClick={onClick}
      // Spread any otherProps to the button element
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
