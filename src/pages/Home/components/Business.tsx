import Shield from "assets/images/Shield.svg";
import Send from "assets/images/Send.svg";
import Star from "assets/images/Star.svg";

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

const Business = () => {
    return(
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
    );
}

export default Business;