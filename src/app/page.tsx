import HeroBanner from "@/components/HeroBanner";
import PriceDecrease from "@/components/PriceDecrease";
import PriceIncrease from "@/components/PriceIncrease";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6">
      <HeroBanner />
      <PriceIncrease />
      <PriceDecrease />
    </div>
  );
}
