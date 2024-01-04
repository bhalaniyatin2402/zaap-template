import Layout from "./Layout/Layout";

import reportIconList from "./../data/reportBtnList.json";
import supporIconList from "./../data/supportBtnList.json";

function Support() {
  return (
    <div className="w-[100%] relative px-4">
      <Layout>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[15px] py-[40px] lg:py-[100px]">
          <div className="max-w-[750px] px-[15px] py-[20px]  lg:py-[52px] lg:px-[36px]">
            <h2 className="text-center lg:text-left text-[25px] xl:text-[42px] font-semibold mb-[15px] lg:mb-[25px]">
              Report
              <span className="text-[#29463f]"> Sections</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[15px] lg:gap-[60px]">
              {reportIconList.map((icon) => (
                <div className="w-[265px] flex justify-start items-center gap-[15px]">
                  <img
                    src={icon.src}
                    alt={icon.name}
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
                Included Support
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-[15px] lg:gap-[60px]">
                {supporIconList.map((icon) => (
                  <div className="w-[265px] flex justify-start items-center gap-[15px]">
                    <img
                      src={icon.src}
                      alt={icon.name}
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
      <img
        src="/support_icn_one.png"
        alt="support_icn_one"
        className="absolute top-[20px] right-0 hidden 2xl:block"
      />
      <img
        src="/support_icn_two.png"
        alt="support_icn_two"
        className="absolute bottom-[20px] left-0 hidden 2xl:block"
      />
    </div>
  );
}

export default Support;
