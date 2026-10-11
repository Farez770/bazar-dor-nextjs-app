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

          <div className="flex min-h-64 items-center justify-center rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
            <div className="flex w-full max-w-sm md:max-w-md flex-col items-center gap-5 rounded-xl bg-green-50/70 p-8">
              <span className="loading loading-spinner loading-lg text-success"></span>
              <h2 className="text-center text-2xl font-semibold text-gray-700">
                পণ্যের তথ্য লোড হচ্ছে...
              </h2>
              <p className="mt-2 text-lg text-base-content/60 text-center">
                আপনার পছন্দের পণ্যের বিস্তারিত তথ্য নিয়ে আসছি। অনুগ্রহ করে একটু
                অপেক্ষা করুন।
              </p>
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-green-100">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
        }
      >
        <PriceIncrease />
        <PriceDecrease />
        <AllProducts />
      </Suspense>
    </div>
  );
}
