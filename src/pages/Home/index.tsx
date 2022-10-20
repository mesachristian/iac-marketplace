import React, {useEffect } from "react";

import "./styles.css";

// COMPONENTS
import { 
  Intro,
  Business
} from "./components";

import cow_nft from "assets/img/cow_nft.jpg";
import { useTranslation } from "react-i18next";

import logo from 'assets/images/logo.png';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const ImageCarousel3D = () => {
  useEffect(() => {
    var radius = window.outerWidth > 680 ? 340 : 180;
    radius = window.outerWidth > 1700 ? 420 : radius;

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
        <div id="spin" className="sm:w-[190px] xl:w-[250px] w-[100px] sm:h-[230px] xl:h-[290px] h-[130px]">
          {IMAGES.map( (img, idx) => {
            return(
              <img src={img} key={idx} alt="" className="rounded-2xl sm:w-[190px] xl:w-[250px] w-[100px] sm:h-[230px] xl:h-[290px] h-[130px]"/>
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
      <Intro />

      <Business />

      <ImageCarousel3D />

      <CTA />

      <Footer />
    </React.Fragment>
  );
};

const CTA = () => {

  const [translate] = useTranslation();
  
  return (
    <div className="w-full sm:px-32 xl:px-0 px-12">
    <section className={`flex justify-center items-center sm:px-16 px-6 sm:my-16 my-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] bg-black-gradient-2 box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">Let’s try our service now!</h2>
        <p className={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <button className="py-2 px-4 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none cursor-pointer">
          {translate("navbar.lblMarketplace")}
        </button>
      </div>
    </section>
    </div>
  )
}

const Footer = () => {

  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];

  return(
    <section className={`sm:px-32 xl:px-0 px-12 flex justify-center items-center sm:py-16 py-6 flex-col`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`font-normal text-primary-text text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary-title">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] text-primary-text leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-primary-text">
        Copyright © 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 text-primary-text">
        <BsFacebook className="w-[21px] h-[21px] mr-6"/>
        <BsTwitter className="w-[21px] h-[21px] mr-6"/>
        <BsInstagram className="w-[21px] h-[21px]"/>
      </div>
    </div>
  </section>
  );
}

export default Home;
