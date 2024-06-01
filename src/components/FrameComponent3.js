import ImageLummi from "./ImageLummi";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px] box-border max-w-full text-center text-21xl text-gray-100 font-montserrat ${className}`}
    >
      <div className="w-[1235px] flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5 box-border max-w-full">
          <div className="w-[629px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 relative text-inherit leading-[140%] font-extrabold font-inherit mq750:text-13xl mq750:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
                Why Choose Us
              </h1>
            </div>
            <b className="self-stretch relative text-lg leading-[160%] text-dimgray-400">
              Elevating Your Home Buying Experience with Expertise, Integrity,
              and Unmatched Personalized Service
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[45px] text-left text-lg mq750:gap-[22px]">
          <ImageLummi
            mapPin="/map-pin@2x.png"
            expertGuidance="Expert Guidance"
            benefitFromOurTeamsSeason="Benefit from our team's seasoned expertise for a smooth buying experience"
          />
          <ImageLummi
            mapPin="/service@2x.png"
            expertGuidance="Personalized Service"
            benefitFromOurTeamsSeason="Our services adapt to your unique needs, making your journey stress-free"
          />
          <div className="flex-1 shadow-[0px_4px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray overflow-hidden flex flex-col items-start justify-start pt-[30px] px-6 pb-[37px] box-border gap-[21px] min-w-[247px] max-w-[275px]">
            <div className="rounded-lg bg-seashell-200 flex flex-row items-start justify-start pt-4 pb-[15px] pr-[15px] pl-4">
              <div className="h-[83px] w-[83px] relative rounded-lg bg-seashell-200 hidden" />
              <img
                className="h-[52px] w-[52px] relative overflow-hidden shrink-0 object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/document@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <b className="relative">Transparent Process</b>
              <div className="self-stretch relative text-base leading-[130%] font-semibold text-dimgray-400">
                Stay informed with our clear and honest approach to buying your
                home
              </div>
            </div>
          </div>
          <ImageLummi
            mapPin="/handshake@2x.png"
            expertGuidance="Exceptional Support"
            benefitFromOurTeamsSeason="Providing peace of mind with our responsive and attentive customer service"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
