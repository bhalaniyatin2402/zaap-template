import { ReactNode } from "react";
import Layout from "./Layout/Layout";

interface AnalysisCardType {
  analysisCardImage: string;
  analysisCardTitle: string;
  analysisCardDescription: string;
  classname?: string;
}

export default function Analysis() {
  return (
    <div className="w-[100%] relative">
      <Layout>
        <div className="flex flex-col items-center justify-start py-[40px] xl:py-[130px] relative  xl:gap-[72px] z-[2] text-center">
          <div className="flex flex-col items-center justify-start relative gap-[5px] lg:gap-[20px] z-[0]">
            <h2 className="flex justify-center items-center flex-col relative capitalize font-semibold z-[0]">
              <span className="text-[20px] md:text-[25px] xl:text-[48px] w-[100%] font-semibold">
                Find Clarity and Confidence in Our Comprehensive.
              </span>
              <span className="text-seagreen text-[#027F61] text-[20px] md:text-[25px] xl:text-[48px] font-semibold">
                Investment Analysis
              </span>
            </h2>
            <p className="relative m-0 w-[80%] text-[14px] md:text-[16px] xl:text-[18px] leading-4 lg:leading-5 font-medium">
              We transform the daunting task of due diligence into a journey of
              clarity and insight. Our streamlined process delivers actionable
              intelligence, empowering your digital investment decisions.
            </p>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-center xl:items-start xl:justify-start gap-[24px] z-[1] text-5xl">
            <AnalyisCard
              analysisCardImage="/datamanagement-1@2x.png"
              analysisCardTitle="Traffic Analysis"
              analysisCardDescription="Unlock critical insights into traffic sources and trends for
                informed acquisitions."
              classname="pt-8"
            />
            <AnalyisCard
              analysisCardImage="/megaphone-1@2x.png"
              analysisCardTitle="Campaign Performance"
              analysisCardDescription="Unlock critical insights into traffic sources and trends for
                informed acquisitions."
              classname="pb-8"
            />
            <AnalyisCard
              analysisCardImage="/revenue-1@2x.png"
              analysisCardTitle="Revenue Sources"
              analysisCardDescription="Discover which revenue sources are driving the most value
                and which ones need attention."
              classname="pt-8"
            />
            <AnalyisCard
              analysisCardImage="/forecast-1@2x.png"
              analysisCardTitle="Trends and Forecasting"
              analysisCardDescription="Harness historical insights for accurate an strategic
                investment forecasting."
              classname="pb-8"
            />
          </div>
        </div>
      </Layout>
      <img
        src="/analysis_icn_one.png"
        alt="analysis_icn_one"
        className="absolute top-[170px] right-[100px] hidden 2xl:block"
      />
      <img
        src="/analysis_icn_two.png"
        alt="analysis_icn_two"
        className="absolute top-[150px] left-[100px] hidden 2xl:block"
      />
      <img
        src="/analysis_icn_three.png"
        alt="analysis_icn_three"
        className="absolute bottom-[100px] left-0 hidden 2xl:block"
      />
    </div>
  );
}

function AnalyisCard({
  analysisCardImage,
  analysisCardTitle,
  analysisCardDescription,
  classname,
}: AnalysisCardType) {
  return (
    <div
      className={`${classname} flex flex-col justify-center items-center px-0 pb-0 h-[366px]`}
    >
      <div
        className={`rounded-13xl bg-gray shadow-[20px_32px_66px_rgba(0,_0,_0,_0.06)] w-[306px] overflow-hidden flex flex-col items-center justify-start box-border relative p-8`}
      >
        <div className="absolute my-0 mx-[!important] rounded-[50%] bg-floralwhite w-[88.6px] h-[88.6px] z-[0]" />
        <img
          className="relative w-[90px] h-[90px] overflow-hidden shrink-0 object-cover z-[1] mb-8"
          alt=""
          src={analysisCardImage}
        />
        <h2 className="relative font-semibold inline-block text-[24px] lg:w-[80%] mb-[12px]">
          {analysisCardTitle}
        </h2>
        <p className="relative text-base font-medium text-dimgray text-[16px]">
          {analysisCardDescription}
        </p>
      </div>
    </div>
  );
}
