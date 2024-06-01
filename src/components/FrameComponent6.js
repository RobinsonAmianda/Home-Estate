import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-seashell-100 flex flex-col items-start justify-start pt-10 px-[103px] pb-[17.5px] box-border gap-[157px] max-w-full text-left text-55xl text-gray-100 font-montserrat mq750:gap-[78px] mq750:pl-[51px] mq750:pr-[51px] mq750:box-border mq1100:pt-[26px] mq1100:pb-5 mq1100:box-border mq450:gap-[39px] mq450:pl-5 mq450:pt-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[906px] relative bg-seashell-100 hidden max-w-full" />
      <header className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border sticky top-[0] z-[99] max-w-full text-left text-5xl text-gray-200 font-montserrat">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="w-[93px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <div className="self-stretch h-[29px] relative overflow-hidden shrink-0 z-[1]">
              <div className="absolute top-[4.5px] left-[3.8px] flex flex-row items-start justify-start">
                <div className="h-[23.6px] flex flex-col items-start justify-start pt-[3.4px] px-0 pb-0 box-border">
                  <div className="w-[3.8px] h-6 relative box-border border-r-[3.8px] border-solid border-gray-200" />
                </div>
                <a className="[text-decoration:none] relative font-extrabold text-[inherit] inline-block min-w-[89px] whitespace-nowrap ml-[-3.1px]">
                  Dwello
                </a>
              </div>
              <div className="absolute top-[7.9px] left-[0px] box-border w-[27.8px] h-[3.8px] z-[1] border-t-[3.8px] border-solid border-gray-200" />
              <div className="absolute top-[2.3px] left-[0px] box-border w-[17px] h-[2.3px] border-t-[2.3px] border-solid border-gray-200" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[66px] max-w-full text-lg text-gray-100 mq1100:gap-[33px] mq450:gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[57px] z-[1]">
                Home
              </a>
            </div>
            <nav className="m-0 w-[415px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full mq1100:hidden mq450:w-[71px]">
              <nav className="m-0 w-[344px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-gray-100 font-montserrat mq450:hidden">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[69px] z-[1]">
                  Service
                </a>
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[68px] z-[1]">
                  Agents
                </a>
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[75px] z-[1]">
                  Contact
                </a>
              </nav>
            </nav>
            <div className="w-[246px] flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-3 pb-0 pr-3 pl-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/user.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] py-3.5 px-[29px] bg-gray-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray-200">
                <div className="h-12 w-[122px] relative rounded-lg bg-gray-100 hidden" />
                <a className="[text-decoration:none] relative text-base font-semibold font-montserrat text-white text-left inline-block min-w-[64px] z-[1]">
                  Sign up
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[690.5px] flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[36px] mq450:gap-[18px]">
        <div className="w-[515px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <div className="flex-1 relative font-extrabold inline-block max-w-full z-[1] mq750:text-35xl mq450:text-22xl">
              <span>Find Your</span>
              <span className="text-49xl"> Dream Home</span>
            </div>
          </div>
          <b className="w-[413px] relative text-lg leading-[160%] inline-block text-dimgray-400 max-w-full z-[1]">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[59px] max-w-full mq750:gap-[29px]">
            <button className="cursor-pointer [border:none] py-[18px] px-[52px] bg-gray-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray-200">
              <div className="h-[58px] w-44 relative rounded-lg bg-gray-100 hidden" />
              <b className="relative text-lg font-semibold font-montserrat text-white text-left inline-block min-w-[71px] z-[1]">
                Sign up
              </b>
            </button>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <img
                className="w-[347px] relative max-h-full max-w-full z-[3]"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
