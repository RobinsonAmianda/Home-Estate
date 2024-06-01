import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <form
      className={`!m-[0] w-[1070px] absolute bottom-[-74px] left-[calc(50%_-_535px)] shadow-[0px_8px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray flex flex-row flex-wrap items-start justify-start py-[51px] px-[30px] box-border gap-[46px] max-w-full z-[4] ${className}`}
    >
      <div className="h-40 w-[1070px] relative shadow-[0px_8px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray hidden max-w-full" />
      <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[523px] max-w-full mq750:flex-wrap mq750:min-w-full">
        <div className="flex-1 rounded-lg bg-seashell-200 flex flex-row items-start justify-between py-[18px] px-[15px] box-border min-w-[136px] gap-[20px] z-[5]">
          <div className="h-[58px] w-[252px] relative rounded-lg bg-seashell-200 hidden" />
          <b className="relative text-lg font-bold font-montserrat text-dimgray-100 text-left inline-block min-w-[82px] z-[1]">
            Location
          </b>
          <img
            className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
            alt=""
            src="/location.svg"
          />
        </div>
        <div className="flex-1 rounded-lg bg-seashell-200 flex flex-row items-start justify-between py-[18px] px-[15px] box-border min-w-[136px] gap-[20px] z-[5]">
          <div className="h-[58px] w-[252px] relative rounded-lg bg-seashell-200 hidden" />
          <b className="relative text-lg font-bold font-montserrat text-dimgray-100 text-left inline-block min-w-[46px] z-[1]">
            Type
          </b>
          <img
            className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
            alt=""
            src="/home.svg"
          />
        </div>
        <div className="flex-1 rounded-lg bg-seashell-200 flex flex-row items-start justify-between py-[18px] px-[15px] box-border min-w-[136px] whitespace-nowrap gap-[20px] z-[5]">
          <div className="h-[58px] w-[252px] relative rounded-lg bg-seashell-200 hidden" />
          <b className="relative text-lg font-bold font-montserrat text-dimgray-100 text-left inline-block min-w-[114px] z-[1]">
            Price Range
          </b>
          <img
            className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
            alt=""
            src="/price.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[18px] pr-[42px] pl-[43px] bg-gray-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[5] hover:bg-dimgray-200">
        <div className="h-[58px] w-[156px] relative rounded-lg bg-gray-100 hidden" />
        <b className="relative text-lg font-semibold font-montserrat text-white text-left inline-block min-w-[71px] z-[1]">
          Sign up
        </b>
      </button>
    </form>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
