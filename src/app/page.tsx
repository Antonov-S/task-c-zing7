import Cta from "@/sections/cta";
import Hero from "@/sections/hero";
import MainArea from "@/sections/main-area";
import Solutions from "@/sections/solutions";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <MainArea />
      <Cta />
      <Solutions />
    </main>
  );
}
