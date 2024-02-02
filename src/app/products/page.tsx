import Card, { DbProps } from "@/components/Card";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProd } from "@/db";
import data from "@/db/data";
import React, { useState } from "react";

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

const page = async () => {
  const products: DbProps[] = await getProd();
  return (
    <div className="flex flex-row">
      <div className="w-3/12">Sidebar</div>
      <div className="flex flex-col w-9/12">
        <h1 className="text-2xl mt-3">Recommended</h1>
        <div className="flex flex-row gap-2 mt-3">
          {btnLinks.map((link) => (
            <Button variant={"outline"}>{link.title}</Button>
          ))}
        </div>
        <div className="flex mt-10 flex-wrap gap-5 mb-10">
          {data.map((prod) => (
            <Card
              key={prod.id}
              title={prod.title}
              img={prod.img}
              newPrice={prod.newPrice}
              reviews={prod.reviews}
              id={0}
              prevPrice={""}
              company={""}
              color={""}
              category={""}
            />
          ))}
          {products.map((prod) => (
            <Card
              key={prod.id}
              title={prod.title}
              img={prod.img}
              newPrice={prod.newPrice}
              reviews={prod.reviews}
              id={0}
              prevPrice={""}
              company={""}
              color={""}
              category={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
