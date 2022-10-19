import { Fragment, useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link, Outlet } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import "./styles.css";

const Marketplace = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  return (
    <Fragment>
      <Header setSideMenuOpened={setSideMenuOpened} />

      <SideMenu sideMenuOpened={sideMenuOpened} />

      {sideMenuOpened && (
        <div className="fixed h-screen w-screen bg-[#141414] opacity-25"></div>
      )}

      <div className="h-screen pt-20 px-6 ss:px-16 w-full flex flex-col flex-grow">
        <Outlet />
        <ProductsGrid />
      </div>
    </Fragment>
  );
};

interface HeaderProps {
  setSideMenuOpened: (e: (prevState: any) => boolean) => void;
}

const Header = ({ setSideMenuOpened }: HeaderProps) => {
  return (
    <header className="fixed w-screen h-16 py-2 flex items-center justify-between px-6 ss:px-16 bg-primary z-50 overflow-y-hidden">
      <label className={`relative w-[600px] h-full`}>
        <input
          type="text"
          className="w-full h-full px-11 text-white bg-transparent border-2 rounded-full border-white outline-none
          focus:border-white transition duration-200"
        />
        <BiSearchAlt2 className="absolute left-3 top-2 w-[30px] h-[30px] text-white" />
        <BsFilter className="absolute left-[560px] top-2 w-[30px] h-[30px] text-white cursor-pointer" />
        <span className="text-white text-base absolute left-[35px] top-3 mx-4 transition duration-200 input-text cursor-text">
          <span className="search-text">Search</span>
          <span className="search-comp transition duration-200">
            , keywords, location, type, etc
          </span>
        </span>
      </label>

      <div className="flex">
        <Link to={'/'}>
          <button className="rounded-full bg-white text-primary px-4 py-1">
            Volver a iac.com
          </button>
        </Link>
        <BsWallet2
          className="ml-4 w-[30px] h-[30px] text-white cursor-pointer"
          onClick={() => setSideMenuOpened((prevState) => !prevState)}
        />
      </div>
    </header>
  );
};

interface SideMenuProps {
  sideMenuOpened: boolean;
}

const SideMenu = ({ sideMenuOpened }: SideMenuProps) => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [userBalance, setUserBalance] = useState<string>();

  const connectWalletHandler = async () => {
    if ((window as any).ethereum && defaultAccount == null) {
      
      // Set Web3 Provider of MetaMask
      setProvider(new ethers.providers.Web3Provider((window as any).ethereum));

      // Request permission to connect users accounts
      let acc = await provider?.send("eth_requestAccounts", []);
      
      setDefaultAccount(acc[0]);
    } else if (!(window as any).ethereum) {
      console.log("Need to install MetaMask");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider?.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount, provider]);

  return (
    <aside
      className={`fixed right-0 h-screen pt-16 z-40 transition-all ${
        sideMenuOpened ? "w-72" : "w-0"
      }`}
      aria-label="Sidebar"
    >
      {sideMenuOpened && (
        <div className="w-full h-full flex items-center justify-center hoverflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          {defaultAccount && (
            <div>
              <div className="accountDisplay">
                <h3>Address: {defaultAccount}</h3>
              </div>
              <div className="balanceDisplay">
                <h3>Balance: {userBalance}</h3>
              </div>
            </div>
          )}
          {defaultAccount == null && (
            <button
              onClick={() => connectWalletHandler()}
              className={`bg-blue-600 text-white px-4 py-2`}
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
    </aside>
  );
};

const ProductsGrid = () => {
  const housesList = [
    {
      name: "House 1",
      id: 1,
    },
    {
      name: "House 2",
      id: 2,
    },
    {
      name: "House 3",
      id: 3,
    },
    {
      name: "House 4",
      id: 4,
    },
    {
      name: "House 5",
      id: 5,
    },
    {
      name: "House 6",
      id: 6,
    },
  ];

  return (
    <div className="w-full mt-5 grid grid-cols-3 gap-5 ">
      {housesList.map((house) => {
        return (
          <div className="bg-white rounded-2xl h-[480px] shadow-lg hover:scale-105 delay-75">
            <div className="bg-house-card bg-center bg-cover bg-no-repeat bg-local h-[60%] rounded-t-2xl"></div>
            <div className="mt-4 h-[36%] flex flex-col justify-end items-center">
              <div className="w-full flex flex-col items-start px-5">
                <p className="text-gray-500 text-base">5404 La Patera Ln</p>
                <p className="text-gray-500 text-sm">Camarillo, CA 93012</p>
              </div>

              <div className="w-full px-5">
                <div className="w-full mt-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 flex flex-col">
                  <div
                    className="bg-emerald-700 h-1.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center mt-2 px-5">
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M7.14876 1.66134C10.3924 0.254134 14.1756 1.14308 16.4528 3.84783C18.7303 6.55258 18.9616 10.4317 17.0219 13.3881C15.0821 16.3444 11.4318 17.6768 8.04372 16.6647C4.65533 15.6529 2.33363 12.5371 2.33301 9.00101"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13.5582 5.88965L7.33594 12.1119"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.00369 7.66656C8.61734 7.66656 9.1148 7.1691 9.1148 6.55545C9.1148 5.9418 8.61734 5.44434 8.00369 5.44434C7.39004 5.44434 6.89258 5.9418 6.89258 6.55545C6.89258 7.1691 7.39004 7.66656 8.00369 7.66656Z"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.8924 12.5562C13.506 12.5562 14.0035 12.0587 14.0035 11.4451C14.0035 10.8314 13.506 10.334 12.8924 10.334C12.2787 10.334 11.7812 10.8314 11.7812 11.4451C11.7812 12.0587 12.2787 12.5562 12.8924 12.5562Z"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1.114 11.6665L2.48552 8.99526L5.22439 10.5563"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="text-gray-500 ml-2 text-sm font-bold">49%</p>
                </div>

                <p className="text-gray-500 text-xs">Equity Available</p>

                <div className="flex items-center">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M5.81575 1.66134C9.05936 0.254134 12.8426 1.14308 15.1198 3.84783C17.3973 6.55258 17.6286 10.4317 15.6888 13.3881C13.7491 16.3444 10.0988 17.6768 6.71071 16.6647C3.32233 15.6529 1.00063 12.5371 1 9.00101C1 8.76601 1.01003 8.53414 1.0304 8.30477C1.28579 5.38037 3.1224 2.83041 5.81575 1.66134Z"
                      stroke="#DB6443"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.83203 3.66602V4.73104"
                      stroke="#DB6443"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.8457 12.5107V13.607"
                      stroke="#DB6443"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.94971 8.63622C7.75848 8.54688 6.86791 7.62557 6.90502 6.5656C6.94213 5.50564 7.95209 4.71901 9.14333 4.80835C10.3346 4.89769 11.2251 5.819 11.188 6.87896"
                      stroke="#DB6443"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.94884 8.63401C10.1401 8.72335 11.0306 9.64466 10.9935 10.7046C10.9564 11.7646 9.94645 12.5512 8.75522 12.4619C7.56398 12.3725 6.67342 11.4512 6.71053 10.3913"
                      stroke="#DB6443"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="text-gray-500 text-sm ml-2 font-bold">
                    $150,000
                  </p>
                </div>
              </div>

              <div className="w-full h-12 self-end border-t-[1px] border-t-[#dee2e6] grid grid-cols-3 mt-7">
                <div className="border-r-[1px] border-gray-300 flex flex-col justify-start items-center">
                  <p className="text-sm text-gray-900 font-bold">8%</p>
                  <p className="text-xs text-gray-500">1yr. ROI</p>
                </div>

                <div className="border-r-[1px] border-gray-300 flex flex-col justify-start items-center">
                  <p className="text-sm text-gray-900 font-bold">7.04%</p>
                  <p className="text-xs text-gray-500">1yr. ROI</p>
                </div>

                <div className="border-r-[1px] border-gray-300 flex flex-col justify-start items-center">
                  <p className="text-sm text-gray-900 font-bold">7.04%</p>
                  <p className="text-xs text-gray-500">1yr. ROI</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Marketplace;
