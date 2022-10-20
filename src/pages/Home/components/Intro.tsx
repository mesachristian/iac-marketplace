import GetStarted from "./GetStarted";
import { TbDiscount2 } from "react-icons/tb";
import robot from "assets/images/robot.png";
import { useTranslation } from "react-i18next";

const Intro = () => {

    const [translate] = useTranslation();

    return(
        <section id="home" className="flex sm:px-32 xl:px-0 px-12 md:flex-row flex-col sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-start flex-col">
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <TbDiscount2 className="w-[32px] h-[32px] text-green-400" />
            <p className="font-normal text-primary-text text-[18px] leading-[30.8px] ml-2">
              <span className="text-green-400">20%</span> {translate("home.sec-1.lblRentability")}{" "}
              <span className="text-green-400">{translate("home.sec-1.lblYear")}</span> {translate("home.sec-1.lblNft")}
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-primary-title ss:leading-[70.8px] leading-[45px]">
              {translate("home.sec-1.lblTitle1")} <br className="sm:block hidden" />{" "}
              <span className="text-gradient">{translate("home.sec-1.lblTitle2")}</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-semibold ss:text-[62px] text-[42px] text-primary-title ss:leading-[70.8px] leading-[45px] w-full">
            {translate("home.sec-1.lblTitle3")}
          </h1>
          <p className="font-normal text-primary-text text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            {translate("home.sec-1.lblDescription")}
          </p>
        </div>

        <div
          className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}
        >
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className="ss:hidden flex justify-center items-center">
          <GetStarted />
        </div>
      </section>
    );
}

export default Intro;