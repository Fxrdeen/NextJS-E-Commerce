"use client";
import { MeteorsDemo } from "@/components/MeteorCard";
import NavBar from "@/components/NavBar";
import { HoverEffect } from "@/components/ui/card-hover";
import { GoogleGeminiEffect } from "@/components/ui/gemini";
import { TypewriterEffect } from "@/components/ui/type-writer";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";
const words = [
  {
    text: "Welcome",
  },
  {
    text: "To",
  },
  {
    text: "BuyWithShopro.com!",
    className: "text-blue-500 dark:text-blue-500",
  },
  // {
  //   text: "With",
  // },
  // {
  //   text: "Shopro!",
  //   className: "text-blue-500 dark:text-blue-500",
  // },
];

const projects = [
  {
    title: "Nigga 1",
    description: "All Products I bought from here were next level",
    link: "",
  },
  {
    title: "Nigga 2",
    description: "All Products I bought from here were next level",
    link: "",
  },
  {
    title: "Nigga 3",
    description: "All Products I bought from here were next level",
    link: "",
  },
  {
    title: "Nigga 4",
    description: "All Products I bought from here were next level",
    link: "",
  },
  {
    title: "Nigga 5",
    description: "All Products I bought from here were next level",
    link: "",
  },
  {
    title: "Nigga 6",
    description: "All Products I bought from here were next level",
    link: "",
  },
];

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="flex flex-col sm:mx-2">
      <div className="flex flex-col items-center justify-center h-[25rem] ">
        <h2 className="text-neutral-600 dark:text-neutral-200  mb-10 text-2xl">
          Find the best resale products here!
        </h2>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <Link href="/products">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              View Products
            </button>
          </Link>
          <Link href={"/register"}>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Sell Products
            </button>
          </Link>
        </div>
      </div>
      <h1 className="text-center text-3xl font-serif font-semibold text-blue-300">
        Look What our Customers had to Say:
      </h1>
      <HoverEffect items={projects} className="mx-20" />
      <div>
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </div>
  );
}
