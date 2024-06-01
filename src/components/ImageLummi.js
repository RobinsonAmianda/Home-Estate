import PropTypes from "prop-types";

const ImageLummi = ({
  className = "",
  mapPin,
  expertGuidance,
  benefitFromOurTeamsSeason,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_30px_rgba(43,_27,_18,_0.12)] rounded-lg bg-lightgray overflow-hidden flex flex-col items-start justify-start pt-[30px] px-6 pb-[37px] box-border gap-[21px] min-w-[247px] max-w-[275px] text-left text-lg text-gray-100 font-montserrat ${className}`}
    >
      <div className="rounded-lg bg-seashell-200 flex flex-row items-start justify-start pt-4 px-[15px] pb-[15px]">
        <div className="h-[83px] w-[83px] relative rounded-lg bg-seashell-200 hidden" />
        <img
          className="h-[52px] w-[53px] relative overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src={mapPin}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <b className="relative font-bold">{expertGuidance}</b>
        <div className="self-stretch relative text-base leading-[130%] font-semibold text-dimgray-400">
          {benefitFromOurTeamsSeason}
        </div>
      </div>
    </div>
  );
};

ImageLummi.propTypes = {
  className: PropTypes.string,
  mapPin: PropTypes.string,
  expertGuidance: PropTypes.string,
  benefitFromOurTeamsSeason: PropTypes.string,
};

export default ImageLummi;
