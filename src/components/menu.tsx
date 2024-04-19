import { links } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";

function Menu() {
  return (
    <nav className="flex gap-14 xl:gap-44">
      <ul className="items-center text-[16px] font-medium leading-[170%] tracking-[0px] text-dark-blue-800 md:flex lg:gap-[40px]">
        {links.map(link => (
          <li key={link.hash}>
            <Button variant="ghost">
              <Link href={link.hash}>{link.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
