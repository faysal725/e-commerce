import HeroSection from "@/components/HeroSection/HeroSection";
import ProductContainer from "@/containers/ProductContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* hero section  */}
      <HeroSection />

      {/* product section  */}
      <ProductContainer />
    </main>
  );
}
