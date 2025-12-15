import React from "react";
import { Input } from "../ui/Input";

export const ContactInfo = () => {
  return (
    <div>
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
    </div>
  );
};
