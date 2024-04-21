import Image from "next/image";

import H1 from "@/components/h1";
import truck from "../app/public/truck.png";
import Info from "@/components/info";
import Pros from "@/components/pros";

function MainArea() {
  return (
    <section className="flex flex-col items-center justify-center">
      <H1 />
      <Image
        src={truck}
        alt="Main picture of a truck"
        width={969}
        height={690}
        priority={true}
        className="mt-6 max-w-[80%] lg:mt-[64px]"
      />
      <Info />
      <Pros />
    </section>
  );
}

export default MainArea;
