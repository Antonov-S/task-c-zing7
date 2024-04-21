import { mainTitle } from "@/lib/constants";

function H1() {
  return (
    <h1 className="mt-4 w-[80%] text-center font-grotesk text-xl font-semibold text-dark-blue sm:text-4xl md:mt-[72px] md:leading-[108%] md:-tracking-[4px] lg:w-[50%] lg:text-5xl xl:text-6xl 2xl:text-7xl">
      {mainTitle}
    </h1>
  );
}

export default H1;
