import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import logo from "assets/images/logo.png";
import { useTranslation } from "react-i18next";

interface NavbarItemProps {
  title: string;
  classProps: any;
}

const NavbarItem = ({ title, classProps }: NavbarItemProps) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {

  const [translate] = useTranslation();
  const NAV_ITEMS = [translate("navbar.lblHome"), translate("navbar.lblAbout")];

  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full flex py-6 justify-between items-center sm:px-20 px-6">
      <img src={logo} alt="logo" className="w-32 cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NAV_ITEMS.map((item, idx) => {
          return (
            <li
              key={item + idx}
              className={`font-normal text-primary-text cursor-pointer text-base mr-16`}
            >
              {item}
            </li>
          );
        })}

        <li className="py-2 px-4 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none">
          {translate("navbar.lblMarketplace")}
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center text-white">
        {toggle ? (
          <HiMenu className="w-[30px] h-[30px]" onClick={() => setToggle((prev) => !prev)} />
        ) : (
          <AiOutlineClose className="w-[30px] h-[30px]" onClick={() => setToggle((prev) => !prev)} />
        )}

        <div
          className={`${
            toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <li
                  key={item + idx}
                  className={`font-normal text-white cursor-pointer text-base mb-4`}
                >
                  {item}
                </li>
              );
            })}

            <li className="py-2 px-4 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none">
              {translate("navbar.lblMarketplace")}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
