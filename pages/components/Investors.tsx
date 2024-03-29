import Image from "next/image";
import Layout from "./Layout/Layout";
import { useState } from "react";

export default function Invesotors() {
  const [carouselState, setCarouselState] = useState<number>(1)
  
  return (
    <div className="w-[100%] bg-[#FBF7EC] relative px-4 flex justify-center items-center">
      <Layout>
        <div className=" py-[40px] lg:py-[100px]">
          <div className="p-3">
            <h2 className="text-[20px] text-center md:text-[25px] xl:text-[48px] mb-[6px] lg:mb-[20px] relative capitalize font-semibold z-[0]">
              Trusted by
              <span className="relative ms-1 text-[#027F61]">
                {" "}
                Investors
                <Image
                  src="/modules_bottom_border.png"
                  alt="bottom_border"
                  width={200}
                  height={5}
                  className="absolute left-0 ms-1"
                />
              </span>
            </h2>
          </div>
          <div className="carousel w-full">
            {[1, 2, 3].map((item, i) => (
              <div
                id={`slide${item}`}
                className="carousel-item relative w-full"
                key={item}
              >
                <div className="">
                  <div className="images flex items-center justify-center py-[30px] lg:py-[72px]">
                    <a href={`#slide${i + 1 <= 1 ? 3 : i}`}>
                      <Image
                        src="/investors_left_arrow.png"
                        alt="investors_left_arrow"
                        width={64}
                        height={21}
                        className="cursor-pointer w-[10%] lg:w-[64px]"
                      />
                    </a>
                    <Image
                      src="/investors.png"
                      alt="investors"
                      width={648}
                      height={169}
                      className="px-[50px] lg:px-[152px] w-[50%]"
                    />
                    <a href={`#slide${i + 1 >= 3 ? 1 : i + 2}`}>
                      <Image
                        src="/investors_right_arrow.png"
                        alt="investors_right_arrow"
                        width={64}
                        height={21}
                        className="cursor-pointer w-[10%] lg:w-[64px]"
                      />
                    </a>
                  </div>
                  <div className="content flex flex-col justify-center">
                    <div className="content flex flex-col justify-center items-center mb-[16px] lg:mb-[32px]">
                      <p className="description text-center text-[11px] lg:text-[18px] mb-[16px] max-w-[80%]">
                        "In a market where every investment feels like a gamble,
                        this service stood out as a beacon of certainty. Their
                        exhaustive analysis unveiled the real value and
                        potential of the business, guiding my decision-making
                        with data-driven insights. Their expertise became my
                        most trusted asset in the investment process."
                      </p>
                      <p className="name mb-[4px] lg:mb-[8px] font-semibold text-[18px] lg:text-[24px]">
                        Oliver S.
                      </p>
                      <p className="typs text-[15px] lg:text-[18px] font-medium text-[#027F61]">
                        E-Commerce Investor
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-[16px]">
                      {[1, 2, 3].map((num, j) => {
                        if (i === j) {
                          return (
                            <span className="w-[22px] h-[22px] flex justify-center items-center" key={num}>
                              <a href={`#slide${j + 1}`}>
                                <Image
                                  src="/investors_circle.png"
                                  alt="investors_circle"
                                  width={22}
                                  height={22}
                                  className=""
                                />
                              </a>
                            </span>
                          );
                        } else {
                          return (
                            <span className="w-[22px] h-[22px] flex justify-center items-center" key={num}>
                              <a href={`#slide${j + 1}`}>
                              <Image
                                src="/investors_dot.png"
                                alt="investors_dot"
                                width={8}
                                height={8}
                                className=""
                              />
                              </a>
                            </span>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <Image
        src="/investors_icon_one.png"
        alt="investerrs_icon_one"
        width={66}
        height={83}
        className="absolute bottom-[250px] right-[100px] hidden 2xl:block"
      />
      <Image
        src="/investors_icon_two.png"
        alt="investerrs_icon_two"
        width={85}
        height={139}
        className="absolute top-[50%] left-0 -translate-y-[50%] hidden 2xl:block"
      />
    </div>
  );
}
