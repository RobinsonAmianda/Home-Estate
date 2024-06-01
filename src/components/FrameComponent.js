import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-1.5 pr-5 pl-[21px] box-border max-w-full text-center text-21xl text-gray-100 font-montserrat ${className}`}
    >
      <div className="w-[681px] flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-extrabold font-inherit mq750:text-13xl mq750:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
              <p className="m-0">Do You Have Any Questions?</p>
              <p className="m-0">Get Help From Us</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-lg text-dimgray-300">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px] min-w-[218px] max-w-full mq450:flex-wrap">
                  <img
                    className="h-[26px] w-[26px] relative object-cover min-h-[26px]"
                    loading="lazy"
                    alt=""
                    src="/icons8verifiedaccount96-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[196px]">
                    <b className="relative">Chat live with our support team</b>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[26px] w-[26px] relative object-cover min-h-[26px]"
                    loading="lazy"
                    alt=""
                    src="/icons8verifiedaccount96-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <b className="relative">Browse our FAQ</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-left text-lg text-dimgray-300">
          <div className="flex-1 shadow-[0px_4px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray flex flex-row items-start justify-start py-[17px] px-6 box-border gap-[8px] min-w-[269px] max-w-full">
            <div className="h-[58px] w-[505px] relative shadow-[0px_4px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray hidden max-w-full" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px] z-[1]"
              loading="lazy"
              alt=""
              src="/email@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative font-semibold z-[1]">
                Enter your email address...
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[18px] px-11 bg-gray-100 rounded-lg flex flex-row items-start justify-start hover:bg-dimgray-200">
            <div className="h-[58px] w-[156px] relative rounded-lg bg-gray-100 hidden" />
            <b className="relative text-lg font-semibold font-montserrat text-white text-left inline-block min-w-[68px] z-[1]">
              Submit
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
