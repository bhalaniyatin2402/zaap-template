import Layout from "./Layout/Layout";

function Report() {
  return (
    <div className="w-[100%] relative px-4">
      <Layout>
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[140px] bg-[#027F61] rounded-3xl py-[50px]">
          <div className="left">
            <img
              src="/report_image.png"
              alt=""
              className="w-[350px] h-[350px]"
            />
          </div>
          <div className="max-w-[463px]">
            <h1 className="text-[20px] md:text-[25px] xl:text-[42px] text-white mb-[16px]">
              Get Your Digital Due Diligence Report
            </h1>
            <p className="text-[14px] xl:text-[16px] text-white mb-[32px]">
              Getting started is easy. Reports are ready in a few days.
            </p>
            <button className="lg:h-[56px] px-[12px] py-[4px] lg:px-[32px] lg:py-[16px] text-[#027F61] bg-[#FFFFFF] rounded-lg font-bold mx-3 border">
              Get Started
            </button>
          </div>
          <img
            src="/report_image_three.png"
            alt="report_image_three"
            className="absolute bottom-[70px] right-[70px] hidden 2xl:block"
          />
        </div>
      </Layout>
      <img
        src="/report_image_two.png"
        alt="report_image_two"
        className="absolute bottom-[20px] left-[100px] hidden 2xl:block"
      />
    </div>
  );
}

export default Report;
