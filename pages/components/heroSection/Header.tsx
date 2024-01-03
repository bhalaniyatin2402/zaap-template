import Image from "next/image";

export default function Header() {
  return (
    <header className="py-[32px] flex justify-between items-center">
      <Image
        src="/zaap-header-logo.png"
        alt="logo"
        width={151}
        height={40}
        className="mx-3 "
      />
      <button className="lg:h-[56px] px-[12px] py-[4px] lg:px-[32px] lg:py-[16px] text-[#027F61] bg-[#FFFFFF] rounded-lg font-bold mx-3 border">
        Get Started
      </button>
    </header>
  );
}
