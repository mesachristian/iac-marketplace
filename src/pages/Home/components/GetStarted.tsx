import { useTranslation } from 'react-i18next';
import { BsArrowUpRight } from 'react-icons/bs';

const GetStarted = () => {
  
  const [translate] = useTranslation();

  return(
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center flex-col bg-primary-bg w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">{translate("home.sec-1.lblP1")}</span>
          </p>
          <BsArrowUpRight className="w-[23px] h-[23px] ml-1 text-[#41b441]" />
        </div>
        
        <p className="font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">{translate("home.sec-1.lblP2")}</span>
        </p>
      </div>
    </div>
  );
}
  export default GetStarted;