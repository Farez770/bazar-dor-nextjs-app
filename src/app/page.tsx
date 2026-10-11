import AllProducts from "@/components/AllProducts";
import HeroBanner from "@/components/HeroBanner";
import PriceDecrease from "@/components/PriceDecrease";
import PriceIncrease from "@/components/PriceIncrease";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="px-6">
      <HeroBanner />
      <Suspense
        fallback={
          // <p className="py-4 text-center text-gray-500">
          //   পণ্যের তথ্য লোড হচ্ছে...
          //   <span className="loading loading-spinner text-success"></span>
          //   <span className="loading loading-bars loading-lg"></span>
          // </p>

          <p className="flex items-center justify-center gap-3 py-8 text-2xl text-gray-500">
            <span className="loading loading-spinner loading-md text-success"></span>
            পণ্যের তথ্য লোড হচ্ছে...
          </p>
        }
      >
        <PriceIncrease />
        <PriceDecrease />
        <AllProducts />
      </Suspense>
    </div>
  );
}
