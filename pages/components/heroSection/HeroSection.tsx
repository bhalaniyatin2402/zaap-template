import Image from "next/image";
import Header from "./Header";
import Icons from "./Icons";
import Layout from "../Layout/Layout";

export default function HeroSection() {
  return (
    <Layout>
      <div className="max-h-[1200px] p-3 mb-[50px]">
        <Header />
        <div className="flex flex-col xl:flex-row justify-between gap-[20px] items-center xl:mt-[50px]">
          <div className="left max-w-[80%] xl:max-w-[50%] gap-[20px] order-2 xl:order-1">
            <h2 className="text-[30px] lg:text-[72px] font-bold xl:mb-[20px]">
              Avoid Investment Traps With
              <span className="">Digital Due Diligence</span>
            </h2>
            <p className="mb-[12px] xl:mb-[52px] text-[18px] xl:text-[24px]">
              Maximize your investment confidence with our in-depth online
              business due diligence service.
            </p>
            <div className="flex justify-start items-center">
              <button className="px-[12px] py-[4px] lg:px-[32px] lg:py-[16px] bg-[#027F61] text-[#FFFFFF] font-bold rounded-lg">
                What's Include
              </button>
              <button className="px-[12px] py-[4px] lg:px-[32px] lg:py-[16px] flex justify-center items-center gap-2 text-[#027F61]">
                how it works
                <Image
                  src="/arrow-right.png"
                  alt="right-arrow"
                  width={23}
                  height={8}
                />
              </button>
            </div>
          </div>
          <div className="right max-w-[60%] xl:max-w-[35%] order-1 xl:order-2">
            <Image
              src="/Building investment.png"
              alt="building investment"
              width={576}
              height={573}
            />
          </div>
        </div>
        <Icons />
      </div>
    </Layout>
  );
}
