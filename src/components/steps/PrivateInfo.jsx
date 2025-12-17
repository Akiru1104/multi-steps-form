import { Input } from "../ui/Input";

export default function PrivateInfo() {
  return (
    <div className="space-y-3">
      <Input placeholder="Email" />
      <Input placeholder="Phone number" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm password" type="password" />
    </div>
  );
}
