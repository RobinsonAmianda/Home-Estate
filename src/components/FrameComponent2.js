import Active from "./Active";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1406px] flex flex-row items-start justify-end py-0 px-[70px] box-border max-w-full text-center text-21xl text-gray-100 font-montserrat mq1275:pl-[35px] mq1275:pr-[35px] mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="w-[1230px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[140%] font-extrabold font-inherit mq750:text-13xl mq750:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
            Our Popular Residences
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[60px] grid-cols-[repeat(3,_minmax(286px,_1fr))] max-w-full text-left text-xl text-dimgray-400 mq750:gap-[30px] mq750:grid-cols-[minmax(286px,_1fr)] mq1100:grid-cols-[repeat(2,_minmax(286px,_497px))] mq1100:justify-center">
          <Active
            group11="/group-11@2x.png"
            sanFranciscoCalifornia="San Francisco, California"
            rooms1="4 Rooms"
            sqFt="3,500 sq ft"
            prop="$2,500,000"
          />
          <Active
            group11="/group-11-1@2x.png"
            sanFranciscoCalifornia="Beverly Hills, California"
            rooms1="3 Rooms"
            sqFt="1,500 sq ft"
            prop="$850,000"
            propMinWidth="92px"
            propMinWidth1="107px"
          />
          <Active
            group11="/group-11-2@2x.png"
            sanFranciscoCalifornia="Palo Alto, California"
            rooms1="6 Rooms"
            sqFt="4,000 sq ft"
            prop="$3,700,000"
            propMinWidth="99px"
            propMinWidth1="126px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
