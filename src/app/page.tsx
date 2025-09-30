import HeroSection from "@/components/heroSection";
import MVV from "@/components/mvv";
import Login from "@/components/login";
import Registro from "@/components/registro";
import Carrossel from "@/components/carrossel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carrossel/>
      <MVV/>
    </div>
  );
}
