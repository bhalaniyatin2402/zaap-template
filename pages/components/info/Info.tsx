import InfoCard from "./InfoCard";

export default function Info() {
  return (
    <section className="">
      <InfoCard
        infoTitle="Mitigate Risk"
        infoDescription="Uncover hidden risks early, ensuring a safer, smarter investment."
        infoImgae="/mitigate.png"
      />
      <InfoCard
        infoTitle="Address Potential Issues"
        infoDescription="Leverage detected challenges to strengthen your negotiation position."
        infoImgae="/location.png"
      />
      <InfoCard
        infoTitle="Uncover Hidden Value"
        infoDescription="Identify hidden revenue streams to boost your investment’s performance."
        infoImgae="/no-view.png"
      />
    </section>
  );
}
