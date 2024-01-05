import Image from "next/image";
import Layout from "./Layout/Layout";

export default function Options() {
  return (
    <div className="relative py-[35px] xl:py-[100px]">
      <Layout>
        <div className="">
          <div className="p-3">
            <h2 className="text-[20px] text-center md:text-[25px] xl:text-[48px] mb-[6px] lg:mb-[72px] relative capitalize font-semibold z-[0]">
              Reporting
              <span className="relative ms-1 text-[#027F61]">
                {" "}
                Options
                <Image
                  src="/modules_bottom_border.png"
                  alt="bottom_border"
                  width={200}
                  height={5}
                  className="absolute left-0 ms-2"
                />
              </span>
            </h2>
          </div>
          <div className="cards flex flex-wrap justify-center items-center gap-[24px] px-3">
            <div className="relative w-[400px] h-[770px] lg:h-[880px] p-10 rounded-2xl border-green-800 box-shadow">
              <h2 className="text-[24px] font-semibold pb-[20px] xl:pb-[32px] border-b-2 border-gray-300">
                Standard Package
              </h2>
              <p className="text-[32px] font-semibold py-[20px] xl:py-[32px]">
                $1995
              </p>
              <ul className="list-disc list-outside flex flex-col justify-center items-start gap-3 font-medium">
                <li className="">
                  In-depth analysis of website traffic patterns
                </li>
                <li className="">
                  Assessment of paid traffic for return on investment evaluation
                </li>
                <li className="">Examination of online revenue streams</li>
                <li className="">
                  Review of historical trends paired with strategic forecasting
                </li>
                <li className="">
                  Evaluation of potential risks and untapped opportunities
                </li>
                <li className="">
                  SEO audit highlighting strengths and weaknessesSEO audit
                  highlighting strengths and weaknesses
                </li>
                <li className="">
                  Market research focusing on customer behavior and competitive
                  positioning
                </li>
                <li className="">
                  Comprehensive report accompanied by a concise executive
                  summary
                </li>
                <li className="">Available in in 5-7 business days</li>
              </ul>
              <button className="lg:h-[56px] px-[12px] absolute bottom-[40px] left-[50%] -translate-x-[50%] py-[4px] lg:px-[32px] lg:py-[16px] text-[#027F61] bg-[#FFFFFF] rounded-lg font-bold border">
                Select Plan
              </button>
            </div>
            <div className="relative w-[400px] h-[770px] lg:h-[880px] p-10 rounded-2xl bg-[#027F61] text-white box-shadow">
              <h2 className="text-[24px] font-semibold pb-[20px] xl:pb-[32px] border-b-2 border-gray-200">
                Premium Package
              </h2>
              <p className="text-[32px] font-semibold py-[20px] xl:py-[32px]">
                $2995
              </p>
              <ul className="list-disc list-outside flex flex-col justify-center items-start gap-2 xl:gap-3 font-medium">
                <li className="">
                  In-depth analysis of website traffic patterns
                </li>
                <li className="">
                  Assessment of paid traffic for return on investment evaluation
                </li>
                <li className="">Examination of online revenue streams</li>
                <li className="">
                  Review of historical trends paired with strategic forecasting
                </li>
                <li className="">
                  Evaluation of potential risks and untapped opportunities
                </li>
                <li className="">
                  SEO audit highlighting strengths and weaknessesSEO audit
                  highlighting strengths and weaknesses
                </li>
                <li className="">
                  Market research focusing on customer behavior and competitive
                  positioning
                </li>
                <li className="">
                  Comprehensive report accompanied by a concise executive
                  summary
                </li>
                <li className="">Available in in 5-7 business days</li>
                <li className="">30 minute Q&A call</li>
              </ul>
              <button className="lg:h-[56px] w-[190px] px-[12px] absolute bottom-[40px] left-[50%] -translate-x-[50%] py-[4px] lg:px-[32px] lg:py-[16px] text-[#027F61] bg-[#FFFFFF] rounded-lg font-bold border">
                Get Your Report
              </button>
            </div>
            <div className="relative w-[400px] h-[770px] lg:h-[880px] p-10 rounded-2xl box-shadow">
              <h2 className="text-[24px] font-semibold pb-[20px] xl:pb-[32px] border-b-2 border-gray-300">
                Platinum Package
              </h2>
              <p className="text-[32px] font-semibold py-[20px] xl:py-[32px]">
                $599
              </p>
              <ul className="list-disc list-outside flex flex-col justify-center items-start gap-3 font-medium">
                <li className="">42 Hosted in 22 locations</li>
                <li className="">99.5% Guaranteed Global</li>
                <li className="">30/5 Email, Chat Support</li>
                <li className="">Multiple Workspaces</li>
                <li className="">No Feature Caps</li>
                <li className="">Personalized Onboarding</li>
                <li className="">White Label ?</li>
                <li className="">Extra Security and</li>
              </ul>
              <button className="lg:h-[56px] px-[12px] absolute bottom-[40px] left-[50%] -translate-x-[50%] py-[4px] lg:px-[32px] lg:py-[16px] text-[#027F61] bg-[#FFFFFF] rounded-lg font-bold border">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <Image
        src="/option_image_one.png"
        alt="option_image_one"
        width={170}
        height={85}
        className="absolute bottom-[170px] right-0 hidden 2xl:block"
      />
    </div>
  );
}
