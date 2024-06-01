import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-lightgray flex flex-row items-end justify-start pt-20 px-[104px] pb-[202px] box-border gap-[53px] max-w-full text-left text-lg text-dimgray-400 font-montserrat mq750:gap-[26px] mq750:pt-[52px] mq750:px-[26px] mq750:pb-[131px] mq750:box-border mq1275:flex-wrap mq1275:justify-center mq1275:pl-[52px] mq1275:pr-[52px] mq1275:box-border ${className}`}
    >
      <div className="h-[539px] w-[1440px] relative bg-lightgray hidden max-w-full" />
      <div className="h-[257px] w-[315px] flex flex-col items-start justify-start">
        <div className="w-[219px] flex flex-col items-start justify-start gap-[32px]">
          <img
            className="w-[93px] h-[29px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <b className="self-stretch relative leading-[130%] z-[1]">
            Bringing you closer to your dream home, one click at a time.
          </b>
        </div>
      </div>
      <div className="w-[147px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[32.5px]">
        <b className="relative text-3xl font-bold text-gray-100 inline-block min-w-[72px] z-[1] mq450:text-lg">
          About
        </b>
        <b className="relative font-bold inline-block min-w-[91px] z-[1]">
          Our Story
        </b>
        <b className="relative font-bold inline-block min-w-[72px] z-[1]">
          Careers
        </b>
        <b className="relative font-bold inline-block min-w-[92px] z-[1]">
          Our Team
        </b>
        <b className="relative font-bold inline-block min-w-[98px] z-[1]">
          Resources
        </b>
      </div>
      <div className="flex flex-col items-start justify-start gap-[32.5px]">
        <b className="relative text-3xl inline-block text-gray-100 min-w-[94px] z-[1] mq450:text-lg">
          Support
        </b>
        <b className="relative font-bold inline-block min-w-[40px] z-[1]">
          FAQ
        </b>
        <b className="relative font-bold inline-block min-w-[104px] z-[1]">
          Contact Us
        </b>
        <b className="relative font-bold inline-block min-w-[113px] z-[1]">
          Help Center
        </b>
        <b className="relative z-[1]">Terms of Service</b>
      </div>
      <div className="h-[245px] w-[146px] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[32.7px]">
          <b className="relative text-3xl inline-block text-gray-100 min-w-[87px] z-[1] mq450:text-lg">
            Find Us
          </b>
          <b className="relative font-bold inline-block min-w-[64px] z-[1]">
            Events
          </b>
          <b className="relative font-bold inline-block min-w-[92px] z-[1]">
            Locations
          </b>
          <b className="relative font-bold inline-block min-w-[104px] z-[1]">
            Newsletter
          </b>
        </div>
      </div>
      <div className="h-[245px] flex flex-col items-start justify-start text-3xl text-gray-100">
        <div className="flex flex-col items-start justify-start gap-[29px]">
          <b className="relative inline-block min-w-[118px] z-[1] mq450:text-lg">
            Our Social
          </b>
          <div className="flex flex-col items-start justify-start gap-[22px] text-lg text-dimgray-400">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/instagram.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <b className="relative font-bold inline-block min-w-[97px] z-[1]">
                  Instagram
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <b className="relative font-bold inline-block min-w-[93px] z-[1]">
                  Facebook
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/twitterx.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <b className="relative font-bold inline-block min-w-[96px] z-[1]">
                  Twitter (x)
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
