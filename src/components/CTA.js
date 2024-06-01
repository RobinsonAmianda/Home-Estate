import { useMemo } from "react";
import PropTypes from "prop-types";

const CTA = ({
  className = "",
  group15,
  maskGroup,
  michaelRodriguez,
  sanDiego,
  testimonial,
  iHadAFantasticExperienceW,
  propAlignSelf,
  propMinWidth,
}) => {
  const cTAStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const sanDiegoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch h-[430px] rounded-lg bg-lightgray overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[196px] px-0 pb-[34px] box-border gap-[28px] max-w-full z-[1] text-left text-xl text-gray-100 font-montserrat mq750:pt-[127px] mq750:pb-[22px] mq750:box-border mq450:h-auto ${className}`}
      style={cTAStyle}
    >
      <img
        className="mt-[-197px] self-stretch h-[169px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={group15}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border shrink-0 max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
            <img
              className="h-[58px] w-[58px] relative object-cover"
              loading="lazy"
              alt=""
              src={maskGroup}
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[172px]">
              <b className="relative font-bold mq450:text-base">
                {michaelRodriguez}
              </b>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base">
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <b
                    className="relative font-semibold inline-block min-w-[85px]"
                    style={sanDiegoStyle}
                  >
                    {sanDiego}
                  </b>
                </div>
                <div className="rounded bg-white flex flex-row items-start justify-start py-0.5 px-[5px] gap-[4px]">
                  <div className="h-6 w-[59px] relative rounded bg-white hidden" />
                  <img
                    className="h-5 w-5 relative rounded-12xs-8 min-h-[20px] z-[1]"
                    alt=""
                    src="/label.svg"
                  />
                  <b className="relative font-semibold inline-block min-w-[25px] z-[1]">
                    {testimonial}
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[130%] font-semibold text-dimgray-400">
            {iHadAFantasticExperienceW}
          </div>
        </div>
      </div>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
  group15: PropTypes.string,
  maskGroup: PropTypes.string,
  michaelRodriguez: PropTypes.string,
  sanDiego: PropTypes.string,
  testimonial: PropTypes.string,
  iHadAFantasticExperienceW: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CTA;
