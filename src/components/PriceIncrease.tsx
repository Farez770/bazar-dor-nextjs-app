import { IIncreaseProductType } from "@/Types/type";

import { IoCaretUpSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PriceIncrease = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const data = await res.json();
  // const increaseProducts = data.filter(
  //   (item: IIncreaseProductType) => item.change.dir === "up",
  // );
  const increaseProducts = data
    .filter((item: IIncreaseProductType) => item.change.dir === "up")
    .sort(
      (a: IIncreaseProductType, b: IIncreaseProductType) =>
        b.change.pct - a.change.pct,
    );

  //   console.log(data);

  return (
    <div className="my-10">
      <h1 className="flex gap-2 items-center text-2xl font-bold mb-3">
        <IoCaretUpSharp className="text-red-500 " />
        আজ দাম বেড়েছে
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {increaseProducts.slice(0, 6).map((item: IIncreaseProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceIncrease;
