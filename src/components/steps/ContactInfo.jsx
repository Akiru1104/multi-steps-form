import { Input } from "../ui/Input";

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Username" />
    </div>
  );
}
