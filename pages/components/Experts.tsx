import Layout from "./Layout/Layout";

import expertCardContent from "../data/exportCardContent.json";
import Image from "next/image";

function Experts() {
  return (
    <div className="relative px-4">
      <Layout>
        <div className="py-[40px] lg:py-[70px]">
          <div className="top">
            <div className="p-3">
              <h2 className="text-[20px] text-center md:text-[25px] xl:text-[48px] mb-[6px] lg:mb-[20px] relative capitalize font-semibold z-[0]">
                We Are Experts In
                <span className="relative ms-1 text-[#027F61]">
                  {" "}
                  These Areas
                  <Image
                    src="/analysis_bottom_border.png"
                    alt="bottom_border"
                    width={0}
                    height={0}
                    className="absolute w-[100%] left-2 h-[6px] lg:h-[10px]"
                  />
                </span>
              </h2>
              <p className="relative m-0 w-[100%] px-5 text-[14px] md:text-[16px] xl:text-[18px] font-medium text-center">
                We transform the daunting task of due diligence into a journey
                of clarity and insight. Our streamlined process delivers
                actionable intelligence, empowering your digital investment
                decisions.
              </p>
            </div>
          </div>
          <div className="bottom flex flex-wrap justify-center items-start gap-[24px]">
            {expertCardContent.map((content) => (
              <div
                className="flex-wrap flex flex-col justify-center items-start w-[360px] border p-4"
                key={content.title}
              >
                <Image
                  src={content.img}
                  alt={content.title}
                  width={56}
                  height={56}
                  className="w-[56px] h-[56px] mb-[24px]"
                />
                <h3 className="text-[24px] font-medium">{content.title}</h3>
                <p className="text-[18px] font-medium">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <Image
        src="/experts_icon_one.png"
        alt="experts_icon_one"
        width={92}
        height={76}
        className="absolute top-[200px] left-[100px] hidden 2xl:block"
      />
      <Image
        src="/experts_icon_two.png"
        alt="experts_icon_two"
        width={101}
        height={129}
        className="absolute bottom-[100px] right-[150px] hidden 2xl:block"
      />
    </div>
  );
}

export default Experts;
