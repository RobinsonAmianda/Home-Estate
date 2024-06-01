import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full text-left text-21xl text-gray-100 font-montserrat ${className}`}
    >
      <div className="w-[1239px] flex flex-row items-start justify-start gap-[106px] max-w-full mq750:gap-[53px] mq1100:flex-wrap mq450:gap-[26px]">
        <img
          className="h-[416px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[387px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="w-[538px] flex flex-col items-start justify-start gap-[48px] min-w-[538px] max-w-full mq750:gap-[24px] mq750:min-w-full mq1100:flex-1">
          <div className="w-[514px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-extrabold font-inherit mq750:text-13xl mq750:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
              We Help You To Find Your Dream Home
            </h1>
            <b className="self-stretch relative text-lg leading-[160%] text-dimgray-400">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-29xl text-dimgray-400 mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="relative inline-block min-w-[95px] mq750:text-19xl mq450:text-10xl">
                8K+
              </b>
              <b className="relative text-lg font-semibold">Houses Available</b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="relative inline-block min-w-[94px] mq750:text-19xl mq450:text-10xl">
                6K+
              </b>
              <b className="relative text-lg font-semibold inline-block min-w-[114px]">
                Houses Sold
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="relative inline-block min-w-[91px] mq750:text-19xl mq450:text-10xl">
                2K+
              </b>
              <b className="relative text-lg font-semibold">Trusted Agents</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
