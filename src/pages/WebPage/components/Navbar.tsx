import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [translate] = useTranslation();
  const NAV_ITEMS = [
    {
      label : translate("navbar.lblHome"),
      url: '/'
    },
    {
      label : translate("navbar.lblAbout"),
      url : 'about'
    }];

  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full flex py-6 justify-between items-center sm:px-20 px-6">
      <img src={logo} alt="logo" className="w-32 cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NAV_ITEMS.map((item, idx) => {
          return (
            <Link to={item.url} key={item.label + idx}>
              <li
                className={`font-normal text-primary-text cursor-pointer text-base mr-16`}
              >
                {item.label}
              </li>
            </Link>
          );
        })}
        
        <Link to={'marketplace'}>
          <li className="py-2 px-4 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none cursor-pointer">
            {translate("navbar.lblMarketplace")}
          </li>
        </Link>
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
                <Link to={item.url} key={item.label + idx}>
                  <li
                    className={`font-normal text-white cursor-pointer text-base mb-4`}
                  >
                    {item.label}
                  </li>
                </Link>
              );
            })}

            <Link to={'marketplace'}>
              <li className="py-2 px-4 font-poppins font-medium text-[18px] text-custom-white bg-green-gradient rounded-[10px] outline-none">
                {translate("navbar.lblMarketplace")}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
