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
          <div>
            Data is Loading...{" "}
            <span className="loading loading-bars loading-lg"></span>
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
