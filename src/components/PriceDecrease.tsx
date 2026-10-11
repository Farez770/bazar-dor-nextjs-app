import { IDecreaseProductType } from "@/Types/type";
import React from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PriceDecrease = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const data = await res.json();

  const decreaseProducts = data
    .filter((item: IDecreaseProductType) => item.change.dir === "down")
    .sort(
      (a: IDecreaseProductType, b: IDecreaseProductType) =>
        a.change.pct - b.change.pct,
    );

  console.log(decreaseProducts);
  return (
    <div className="my-10">
      <h1 className="flex gap-2 items-center text-2xl font-bold">
        <IoCaretDownSharp className="text-green-500 " />
        আজ দাম কমেছে
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {decreaseProducts.slice(0, 6).map((item: IDecreaseProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceDecrease;
