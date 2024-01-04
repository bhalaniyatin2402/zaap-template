import Layout from "./Layout/Layout";

interface InfoCardType {
  infoImagePath: string;
  infoCardTitle: string;
  infoCardDescriptionn: string;
}

export default function Info() {
  return (
    <div className="relative bg-[#FBF7EC]">
      <Layout>
        <div className="runded-3xl flex flex-col lg:flex-row items-center lg:items-center justify-center xl:justify-center py-[40px] lg:py-[100px] px-3 box-border gap-[24px] z-[1] text-center text-5xl">
          <InfoCard
            infoImagePath="/mitigation-2@2x.png"
            infoCardTitle="Mitigate Risk"
            infoCardDescriptionn="Uncover hidden risks early, ensuring a safer, smarter investment."
          />
          <InfoCard
            infoImagePath="/location-1@2x.png"
            infoCardTitle="Address Potential Issues"
            infoCardDescriptionn="Leverage detected challenges to strengthen your negotiation
        position."
          />
          <InfoCard
            infoImagePath="/noview-1@2x.png"
            infoCardTitle="Uncover Hidden Value"
            infoCardDescriptionn=" Identify hidden revenue streams to boost your investment’s
        performance."
          />
        </div>
        <img
          src="/about_section_image.png"
          alt="about_section_image"
          className="absolute top-[80%] right-0 hidden 2xl:block"
        />
      </Layout>
    </div>
  );
}

function InfoCard({
  infoImagePath,
  infoCardTitle,
  infoCardDescriptionn,
}: InfoCardType) {
  return (
    <div className="rounded-3xl bg-white overflow-hidden flex flex-col items-center justify-start py-10 px-0 relative gap-[32px] z-[0] max-h-[308px]">
      <img
        className="relative w-[90px] h-[90px] overflow-hidden shrink-0 object-cover z-[0]"
        alt=""
        src={infoImagePath}
      />
      <div className="w-[360px] flex flex-col items-center justify-start gap-[16px] z-[1]">
        <div className="relative text-[24px] leading-[150%] capitalize font-semibold">
          {infoCardTitle}
        </div>
        <div className="relative text-[18px] leading-[150%] font-medium text-dimgray flex items-center justify-center w-[304px]">
          {infoCardDescriptionn}
        </div>
        <img
          src="/info_card_image.png"
          alt="info_card_image"
          className="absolute top-[50%] right-0 -translate-y-[50%]"
        />
        <img
          src="/info_card_image.png"
          alt="info_card_image"
          className="absolute top-[50%] left-0 -translate-y-[50%] rotate-180"
        />
      </div>
    </div>
  );
}
