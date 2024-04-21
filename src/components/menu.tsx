import { links, mobileLinks } from "@/lib/constants";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Button } from "./ui/button";
import NavButtonGroup from "./nav-button-group";

type MenuProps = {
  isMobuleMenuOpen: boolean;
  toggleMobile: () => void;
};

function Menu({ toggleMobile, isMobuleMenuOpen }: MenuProps) {
  return (
    <>
      {!isMobuleMenuOpen ? (
        <nav className="flex gap-14 xl:gap-44">
          <ul className="hidden items-center text-[16px] font-medium leading-[170%] tracking-[0px] text-dark-blue-800 md:flex lg:gap-[40px]">
            {links.map((item, i) => (
              <Button key={i} variant="ghost">
                {item.name}
              </Button>
            ))}
          </ul>
          <NavButtonGroup />
        </nav>
      ) : (
        <div className="fixed right-0 top-0 z-50 flex h-screen w-screen flex-col justify-center gap-16 bg-black/80 text-white hover:text-white/10 ps-10 transition-all lg:hidden">
          <IoMdClose
            className="absolute right-4 top-5 cursor-pointer text-4xl"
            onClick={toggleMobile}
          />
          <ul className="flex flex-col gap-6 font-bold">
            {mobileLinks.map((item, i) => (
              <Button key={i} variant="ghost">
                {item.name}
              </Button>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
