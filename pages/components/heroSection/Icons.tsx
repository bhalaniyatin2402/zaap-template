import Image from "next/image";

export default function Icons() {
  return (
    <>
      <Image
        src="/Vector.png"
        alt="vector image"
        width={650}
        height={250}
        className="absolute top-0 right-0 -z-10 max-w-[50%]  max-h-[60%] xl:max-w-[50vw] xl:max-h-[70vh]"
      />
      <Image
        src="/Vector_four.png"
        alt="vector image"
        width={70}
        height={68}
        className="absolute top-[88px] left-[50%] -z-10 hidden 2xl:block"
      />
      <Image
        src="/Vector_three.png"
        alt="vector image"
        width={178}
        height={49}
        className="absolute top-[630px] left-[45%] -z-10 hidden xl:block"
      />
      <Image
        src="/Group.png"
        alt="group image"
        width={56}
        height={50}
        className="absolute top-[129px] left-[116px] hidden 2xl:block"
      />
      <Image
        src="/Group_one.png"
        alt="group image"
        width={100}
        height={140}
        className="absolute top-[620px] left-[0] hidden 2xl:block"
      />
    </>
  );
}
