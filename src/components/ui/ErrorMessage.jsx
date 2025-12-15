import React from "react";

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  const errorMessageStyle = {
    color: "red",
    fontSize: "12px",
  };

  return <div style={errorMessageStyle}>{message}</div>;
};
