import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { solutions } from "@/lib/constants";

function Solutions() {
  return (
    <section className="mb-11 flex w-[70%] flex-col items-center justify-center text-dark-blue md:mb-[100px] xl:items-start">
      <h2 className="mb-12 mt-11 font-grotesk text-2xl font-semibold -tracking-[2px] md:mt-[100px] lg:mb-[62px] lg:text-[48px] xl:self-start xl:leading-[115%]">
        Други услуги
      </h2>
      <div className="flex flex-col gap-8 md:w-full md:justify-center lg:flex-row lg:gap-[24px]">
        {solutions.map((s, i) => (
          <SolutionCard key={i} src={s.src} heading={s.heading} />
        ))}
      </div>
    </section>
  );
}

function SolutionCard({
  src,
  heading
}: {
  src: StaticImageData;
  heading: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src}
        alt="Picture of current logistic salution"
        width={416}
        height={300}
        className="mb-2 w-[416] h-[300] rounded-[16px] transition duration-500 hover:scale-105 md:mb-[30px] md:w-full"
      />
      <h3 className="font-grotesk text-lg font-semibold md:text-[24px] md:leading-[140%] md:-tracking-[0.5px]">
        <Link href="#" className="transition-all hover:underline">
          {heading}
        </Link>
      </h3>
    </div>
  );
}

export default Solutions;
