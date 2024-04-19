import Link from "next/link";

function Logo() {
  return (
    <p className="font-grotesk text-[29.65px] font-bold leading-[140%] -tracking-[0.62px] hover: font-bold/20">
      <Link href="/">Website</Link>
    </p>
  );
}

export default Logo;
