import Layout from "./Layout/Layout";

import reportIconList from "./../data/reportBtnList.json";
import supporIconList from "./../data/supportBtnList.json";
import Image from "next/image";

function Support() {
  return (
    <div className="w-[100%] relative px-4">
      <Layout>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[15px] py-[40px] lg:py-[100px]">
          <div className="max-w-[750px] px-[15px] py-[20px]  lg:py-[52px] lg:px-[36px]">
            <h2 className="text-center lg:text-left text-[25px] xl:text-[42px] font-semibold mb-[15px] lg:mb-[25px]">
              Report
              <span className="relative text-[#027F61]">
                {" "}
                Sections
                <Image
                  src="/modules_bottom_border.png"
                  alt="bottom_border"
                  width={220}
                  height={5}
                  className="absolute left-[10px] -bottom-2 lg:-bottom-2 w-[90%] h-[8px] lg:h-[10px]"
                />
              </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[15px] lg:gap-[60px]">
              {reportIconList.map((icon) => (
                <div
                  className="w-[265px] flex justify-start items-center gap-[15px]"
                  key={icon.name}
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[18px] lg:text-24px font-semibold">
                    {icon.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[470px]">
            <div className="bg-[#027F61]  px-[15px] py-[20px] lg:py-[52px] lg:px-[36px] rounded-2xl">
              <h2 className="text-center lg:text-left text-[25px] xl:text-[42px] font-semibold mb-[15px] lg:mb-[25px] text-white">
                Included {" "}
                <span className="relative text-white">
                   Supports
                  <Image
                    src="/supports_bottom_border.png"
                    alt="bottom_border"
                    width={220}
                    height={5}
                    className="absolute left-0 -bottom-3 w-[100%] h-[8px] lg:h-[10px]"
                  />
                </span>
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-[15px] lg:gap-[60px]">
                {supporIconList.map((icon) => (
                  <div
                    className="w-[265px] flex justify-start items-center gap-[15px]"
                    key={icon.name}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <p className="text-[18px] lg:text-24px font-semibold text-white">
                      {icon.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Image
        src="/support_icn_one.png"
        alt="support_icn_one"
        width={108}
        height={96}
        className="absolute top-[20px] right-0 hidden 2xl:block"
      />
      <Image
        src="/support_icn_two.png"
        alt="support_icn_two"
        width={83}
        height={216}
        className="absolute bottom-[20px] left-0 hidden 2xl:block"
      />
    </div>
  );
}

export default Support;
