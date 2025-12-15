import React from "react";
import { Header } from "../components/layer/Header";
import { Input } from "../components/ui/Input";

const Home = () => {
  return (
    <div>
      <div className="w-120 bg-amber-300">
        <Header />
        <Input />
      </div>
    </div>
  );
};

export default Home;
