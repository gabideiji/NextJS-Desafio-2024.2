import Image from "next/image";
import Header from "../components/search/header";
import HeroSection from "@/components/search/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-10/12 max-auto">
        <HeroSection />
      </div>
    </>
  );
}
