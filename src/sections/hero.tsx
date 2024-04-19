import Logo from "@/components/logo";
import Menu from "@/components/menu";
import NavButtonGroup from "@/components/nav-button-group";

function Hero() {
  return (
    <section className="flex w-[90%] items-center justify-between py-4 text-dark-blue lg:mt-8 xl:w-[85%]">
      <Logo />
      <Menu />
      <NavButtonGroup />
    </section>
  );
}

export default Hero;
