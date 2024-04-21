"use client";

import { useState } from "react";
import clsx from "clsx";

import Logo from "@/components/logo";
import Menu from "@/components/menu";
import { RxHamburgerMenu } from "react-icons/rx";

function Hero() {
  const [isMobuleMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenuOpen(!isMobuleMenuOpen);
  };

  return (
    <section className="flex w-[90%] items-center justify-between py-4 text-dark-blue lg:mt-8 xl:w-[85%]">
      <Logo />
      <Menu toggleMobile={toggleMobile} isMobuleMenuOpen={isMobuleMenuOpen} />
      <RxHamburgerMenu
        onClick={toggleMobile}
        className={clsx(
          !isMobuleMenuOpen ? "cursor-pointer text-4xl md:hidden" : "invisible"
        )}
      />
    </section>
  );
}

export default Hero;
