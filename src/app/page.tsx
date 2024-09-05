import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LandingPage from "@/components/landing-page"
import Personagens from "@/components/personagens";
import MissaoVisao from "@/components/missaovisao";

export default function Home() {
  return (
    <div className=" space-y-24 md:space-y-32 w-full py-8 px-4 md:p-0 min-h-screen max-auto">
    <Header />
    <HeroSection />
    <LandingPage />
    <Personagens />
    <MissaoVisao />
    </div>

  );
}
