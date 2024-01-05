import Image from "next/image";

import Layout from "./Layout/Layout";
import analysisBtnList from "./../data/analysisBtnList.json";

function Modules() {
  return (
    <div className="relative bg-[#FBF7EC] py-[35px] xl:py-[100px]">
      <Layout>
        <div className="flex flex-col items-center justify-center relative gap-[30px] xl:gap-[80px] z-[3] text-center">
          <div className="p-3">
            <h2 className="text-[20px] md:text-[25px] xl:text-[48px] mb-[6px] lg:mb-[20px] relative capitalize z-[0] font-semibold">
              Due Diligence
              <span className="relative ms-1 text-[#027F61]">
                Modules
                <Image
                  src="/modules_bottom_border.png"
                  alt="bottom_border"
                  width={200}
                  height={5}
                  className="absolute left-0"
                />
              </span>
            </h2>
            <p className="relative m-0 w-[100%] px-5 text-[14px] md:text-[16px] xl:text-[18px] font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="flex flex-wrap gap-[12px] lg:gap-x-12 lg:gap-y-12 justify-center overflow-hidden">
            {analysisBtnList.map((btnName) => (
                <button
                  className="relative text-[16px] lg:text-[24px] text-[#027F61] px-[6px] py-[8px] lg:px-[20px] lg:py-[24px] w-[250px] h-[50px] lg:w-[394px] lg:h-[84px] border font-semibold"
                  key={btnName}
                >
                  {btnName}
                </button>
            ))}
          </div>
        </div>
        <Image
          src="/module_image_one.png"
          alt="module_image_one"
          width={146}
          height={146}
          className="absolute top-[200px] left-[100px] hidden 2xl:block"
        />
        <Image
          src="/module_image_two.png"
          alt="module_image_two"
          width={68}
          height={71}
          className="absolute top-[240px] right-[100px] hidden 2xl:block"
        />
        <Image
          src="/module_image_three.png"
          alt="module_image_three"
          width={142}
          height={149}
          className="absolute top-[60%] left-0 hidden 2xl:block"
        />
      </Layout>
    </div>
  );
}

export default Modules;
