import Image from "next/image";
import Layout from "./Layout/Layout";

function Work() {
  return (
    <div className="bg-[#FBF7EC] relative px-4">
      <Layout>
        <div className="top">
          <div className="p-3">
            <h2 className="text-[20px] text-center md:text-[25px] xl:text-[48px] mb-[6px] lg:mb-[20px] relative capitalize font-semibold z-[0]">
              How It
              <span className="ms-1 text-[#027F61]">Works</span>
            </h2>
            <p className="relative m-0 w-[100%] px-5 text-[14px] md:text-[16px] xl:text-[18px] font-medium text-center">
              We transform the daunting task of due diligence into a journey of
              clarity and insight. Our streamlined process delivers actionable
              intelligence, empowering your digital investment decisions.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[100px] py-[40px] lg:py-[100px]">
            <div className="sm:w-[70%] lg:w-[50%] flex justify-center items-center px-3">
              <div className="text-[#027F61] text-[40px] lg:text-[70px] place-self-start mr-5 font-bold">
                01
              </div>
              <div className="content">
                <h2 className="text-[25px] md:text-[25px] lg:text-[40px]">
                  Request Due Diligence
                </h2>
                <p className="text-[16px] lg:text-[20px]">
                  Experience a hassle-free process that prioritizes a quick
                  turnaround, with reports commonly prepared in 5 business days.
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[400px] inline-block">
              <Image
                src="/works_image_one.png"
                alt="works_image_one"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[100px] pb-[40px] lg:pb-[100px]">
            <div className="sm:w-[70%] lg:w-[50%] flex justify-center items-center px-3 order-1 lg:order-2">
              <div className="text-[#027F61] text-[40px] lg:text-[70px] place-self-start mr-5 font-bold">
                02
              </div>
              <div className="content">
                <h2 className="text-[25px] md:text-[25px] lg:text-[40px]">
                  Provide Access to Data
                </h2>
                <p className="text-[16px] lg:text-[20px]">
                  Access to Google Analytics is sufficient for a comprehensive
                  report, but incorporating Google Ads, Facebook Ads, and Search
                  Console data will maximize the report’s depth and usefulness.
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[400px] inline-block order-2 lg:order-1">
              <Image
                src="/works_image_two.png"
                alt="works_image_one"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[100px] pb-[40px] lg:pb-[100px]">
            <div className="sm:w-[70%] lg:w-[50%] flex justify-center items-center px-3">
              <div className="text-[#027F61] text-[40px] lg:text-[70px] place-self-start mr-5 font-bold">
                03
              </div>
              <div className="content">
                <h2 className="text-[25px] md:text-[25px] lg:text-[40px]">
                  Gain Powerful Insights
                </h2>
                <p className="text-[16px] lg:text-[20px]">
                  We specialize in identifying the essential data for investors,
                  revealing unforeseen risks and untapped potential in our
                  straightforward reports.
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[400px] inline-block">
              <Image
                src="/works_image_three.png"
                alt="works_image_three"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Layout>
      <Image
        src="/works_icon_one.png"
        alt="works_icon_one"
        width={92}
        height={149}
        className="absolute top-[100px] right-[183px] hidden 2xl:block"
      />
      <Image
        src="/works_icon_two.png"
        alt="works_icon_two"
        width={124}
        height={187}
        className="absolute top-[40%] right-0 hidden 2xl:block"
      />
      <Image
        src="/works_icon_three.png"
        alt="works_icon_three"
        width={109}
        height={185}
        className="absolute bottom-[70px] right-0 hidden 2xl:block"
      />
      <Image
        src="/works_icon_four.png"
        alt="works_icon_four"
        width={34}
        height={123}
        className="absolute top-[350px] left-[150px] hidden 2xl:block"
      />
      <Image
        src="/works_icon_five.png"
        alt="works_icon_five"
        width={115}
        height={305}
        className="absolute bottom-[200px] left-0 hidden 2xl:block"
      />
    </div>
  );
}

export default Work;
