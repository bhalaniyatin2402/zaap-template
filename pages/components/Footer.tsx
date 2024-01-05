import Image from "next/image";
import Layout from "./Layout/Layout";

export default function Footer() {
  return (
    <div className="relative bg-[#027F61] text-white">
      <Layout>
        <div className="py-[40px] lg:py-[100px] flex flex-col justify-center items-center gap-[70px] lg:gap-[130px] px-4 lg:px-0">
          <div className="flex flex-col justify-center items-center gap-[35px] lg:gap-[72px]">
            <div className="flex flex-col justify-center items-center gap-[10px] lg:gap-[20px]">
              <h2 className="text-center mb-[8px] text-[25px] lg:text-[42px] font-semibold">
                Elevate Your Strategy with Insightful Digital Due Diligence
              </h2>
              <p className="text-center text-[16px] lg:text-[24px] font-medium">
                Submit your email below and we’ll send you the 3 question intake
                form.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[16px]">
              <input
                type="text"
                placeholder="Email Address"
                className="p-4 w-[250px] lg:w-[312px] px-[9px] py-[8px] lg:px-[18px] lg:py-[16px] rounded-md text-black"
              />
              <button className="font-bold px-[26px] py-[8px] lg:px-[32px] lg:py-[16px] bg-[#E8B540] rounded-md">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="bottom w-[100%] flex flex-col md:flex-row gap-[35px] justify-between items-center px-4">
            <div className="logo">
              <Image
                src="/footer_logo.png"
                alt="footer-logo"
                width={152}
                height={41}
                className="cursor-pointer"
              />
            </div>
            <div className="soc_icon flex flex-col justify-center items-center gap-[20px]">
              <p className="text-[18px] font-medium">Find us on social media</p>
              <div className="flex justify-center items-center gap-[12px]">
                <Image
                  src="/footer_soc_facebook.png"
                  alt="footer_soc_facebook"
                  width={39}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/footer_soc_instagram.png"
                  alt="footer_soc_instagram"
                  width={39}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/footer_soc_twitter.png"
                  alt="footer_soc_twitter"
                  width={39}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/footer_soc_linked_in.png"
                  alt="footer_soc_linked_in"
                  width={39}
                  height={38}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="contact">
              <h4 className="mb-[24px] text-[18px] font-medium">
                get in touch with us
              </h4>
              <div className="flex flex-col justify-center items-start gap-[16px]">
                <p className="text-[20px] font-medium flex justify-center items-start gap-[14px] cursor-pointer">
                  <Image src="/footer_sms.png" alt="footer_sms" width={24} height={24} className="" />
                  info@example.com
                </p>
                <p className="text-[20px] font-medium flex justify-center items-start gap-[14px] cursor-pointer">
                  <Image
                    src="/footer_phone.png"
                    alt="footer_phone"
                    width={24}
                    height={24}
                    className=""
                  />
                  (888) 1234-5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Image
        src="/footer_icon_one.png"
        alt="footer_icon_one"
        width={73}
        height={73}
        className="absolute top-[35%] right-[200px] hidden 2xl:block"
      />
      <Image
        src="/footer_icon_two.png"
        alt="footer_icon_two"
        width={133}
        height={136}
        className="absolute bottom-[60px] right-[60px] hidden 2xl:block"
      />
      <Image
        src="/footer_icon_three.png"
        alt="footer_icon_three"
        width={59}
        height={95}
        className="absolute top-[40%] left-[150px] hidden 2xl:block"
      />
    </div>
  );
}
