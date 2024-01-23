import Card from "@/components/Card";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";

const btnLinks = [
  {
    title: "All Products",
  },
  {
    title: "Mobiles",
  },
  {
    title: "Laptops",
  },
  {
    title: "Tablets",
  },
  {
    title: "Television",
  },
];

const page = () => {
  return (
    <div className="flex flex-row">
      <div className="w-4/12">Sidebar</div>
      <div className="flex flex-col">
        <h1 className="text-2xl mt-3">Recommended</h1>
        <div className="flex flex-row gap-2 mt-3">
          {btnLinks.map((link) => (
            <Button variant={"outline"}>{link.title}</Button>
          ))}
        </div>
        <div className="flex mt-10">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default page;
