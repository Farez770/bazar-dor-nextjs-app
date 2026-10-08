import ProductCard from "@/components/ProductCard";
import { IAllProductType } from "@/Types/type";
import Image from "next/image";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  console.log(data);
  console.log(data.categoryBn);

  const toBengaliNumber = (value: number | string) => {
    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return value
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  };
  const category = data[0];
  return (
    <div className="mt-6 space-y-6">
      <div className="flex gap-4 items-center bg-white rounded-2xl p-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-xl  text-5xl">
          {category?.categoryIcon}
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {category?.categoryNameBn}
          </h1>
          <p className="text-gray-500">
            {" "}
            {toBengaliNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন{" "}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 ">
        <select defaultValue="" className="select">
          <option disabled={true}>ডিফল্ট</option>
          <option>দাম : কম থেকে বেশি </option>
          <option>দাম : বেশি থেকে কম</option>
        </select>
      </div>
      <h1 className="text-[#4c514d]">
        মোট {toBengaliNumber(data.length)}টি পণ্য দেখানো হচ্ছে
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item: IAllProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
