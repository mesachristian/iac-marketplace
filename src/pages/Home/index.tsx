import React, { useEffect } from "react";
import { TbDiscount2 } from "react-icons/tb";
import GetStarted from "./components/GetStarted";
import robot from "assets/images/robot.png";
import Shield from "assets/images/Shield.svg";
import Send from "assets/images/Send.svg";
import Star from "assets/images/Star.svg";

import "./styles.css";

import cow_nft from "assets/img/cow_nft.jpg";

export const features = [
  {
    id: "feature-1",
    icon: Star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: Shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: Send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

interface FeatureCardProps {
  icon: any;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-primary-text text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-primary-text text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ImageCarousel3D = () => {
  useEffect(() => {
    var radius = window.outerWidth > 680 ? 340 : 180;

    var ospin = document.getElementById("spin");
    let aImg = ospin?.getElementsByTagName("img");

    var aEle: any[];

    if (aImg != undefined) {
      aEle = Array.from(aImg);
    }

    if (ospin != undefined) {
      ospin.style.animation = `spinRight 60s infinite linear`;
      ospin.style.animationPlayState = 'running';
    }

    const init = (delayTime: number) => {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transitionDelay = delayTime;
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
      }
    };

    init(1000);
  }, []);

  const IMAGES = [cow_nft, cow_nft, cow_nft, cow_nft, cow_nft, cow_nft, cow_nft];

  return (
    <section className="realtive w-full h-screen flex flex-col justify-start items-center sm:px-32 xl:px-0 px-12">

      <h1 className="text-primary-title text-4xl uppercase font-bold text-center">Invierte y consigue tu NFT único que representa tu propiedad</h1>

      <div id="drag">
        <div id="spin" className="sm:w-[190px] w-[100px] sm:h-[230px] h-[130px]">
          {IMAGES.map( (img, idx) => {
            return(
              <img src={img} key={idx} alt="" className="rounded-2xl sm:w-[190px] w-[100px] sm:h-[230px] h-[130px]"/>
            );
          })}
        </div>
        <div id="ground"></div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <React.Fragment>
      <section id="home" className="flex sm:px-32 xl:px-0 px-12 md:flex-row flex-col sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-start flex-col">
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <TbDiscount2 className="w-[32px] h-[32px] text-green-400" />
            <p className="font-normal text-primary-text text-[18px] leading-[30.8px] ml-2">
              <span className="text-green-400">20%</span> Discount For{" "}
              <span className="text-green-400">1 Month</span> Account
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary-title ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-semibold ss:text-[68px] text-[52px] text-primary-title ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className="font-normal text-primary-text text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
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

      <section
        id="features"
        className="flex sm:px-32 xl:px-0 px-12 md:flex-row flex-col sm:py-16 py-6"
      >
        <div className="flex-1 flex justify-center items-start flex-col">
          <h2 className="font-semibold xs:text-[48px] text-[40px] text-primary-title xs:leading-[76.8px] leading-[66.8px] w-full">
            You do the business, <br className="sm:block hidden" /> we’ll handle
            the money.
          </h2>
          <p className="font-normal text-primary-text text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>

          <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none mt-10`}
          >
            Get Started
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>

      <ImageCarousel3D />
    </React.Fragment>
  );
};

export default Home;
