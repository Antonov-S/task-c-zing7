import Hero from "@/sections/hero";
import MainArea from "@/sections/main-area";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <MainArea />
    </main>
  );
}
