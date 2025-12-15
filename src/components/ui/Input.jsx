import React from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

export const Input = () => {
  return (
    <div>
      <Label />
      <input type="text" />
      <ErrorMessage />
    </div>
  );
};
