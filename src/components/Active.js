import { useMemo } from "react";
import PropTypes from "prop-types";

const Active = ({
  className = "",
  group11,
  sanFranciscoCalifornia,
  rooms1,
  sqFt,
  prop,
  propMinWidth,
  propMinWidth1,
}) => {
  const sqFtStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`shadow-[0px_4px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border gap-[18px] max-w-full text-left text-xl text-dimgray-400 font-montserrat ${className}`}
    >
      <img
        className="self-stretch h-[356px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={group11}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24.5px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[8px] text-gray-100">
            <img
              className="h-6 w-6 relative object-cover min-h-[24px]"
              loading="lazy"
              alt=""
              src="/location-1@2x.png"
            />
            <b className="relative mq450:text-base">{sanFranciscoCalifornia}</b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[39px] text-lg mq450:flex-wrap mq450:gap-[19px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="h-6 w-6 relative rounded bg-white">
                <div className="absolute top-[0px] left-[0px] rounded bg-white w-full h-full hidden" />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rooms@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <b className="relative font-semibold inline-block min-w-[82px]">
                  {rooms1}
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="h-6 w-6 relative rounded bg-white">
                  <div className="absolute top-[0px] left-[0px] rounded bg-white w-full h-full hidden" />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/size@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div
                    className="relative font-semibold inline-block min-w-[96px]"
                    style={sqFtStyle}
                  >
                    {sqFt}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-3xl mq450:flex-wrap">
            <button className="cursor-pointer [border:none] pt-[11px] px-[21px] pb-3 bg-gray-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-200">
              <div className="h-10 w-[98px] relative rounded-lg bg-gray-100 hidden" />
              <b className="relative text-sm font-semibold font-montserrat text-white text-left inline-block min-w-[56px] z-[1]">
                Sign up
              </b>
            </button>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <b
                className="relative font-bold inline-block min-w-[126px] whitespace-nowrap mq450:text-lg"
                style={bStyle}
              >
                {prop}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Active.propTypes = {
  className: PropTypes.string,
  group11: PropTypes.string,
  sanFranciscoCalifornia: PropTypes.string,
  rooms1: PropTypes.string,
  sqFt: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Active;
