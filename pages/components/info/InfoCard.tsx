import Image from "next/image"

interface InfoCardType {
  infoTitle: string,
  infoDescription: string,
  infoImgae: string
}

export default function InfoCard({ infoTitle, infoDescription, infoImgae }: InfoCardType) {
  return (
    <div className="">
      <Image
        src={infoImgae}
        width={90}
        height={90}
        alt="info card image"
        className=""
      />
      <h1 className="">
        {infoTitle}
      </h1>
      <p className="">
        {infoDescription}
      </p>
    </div>
  )
} 
