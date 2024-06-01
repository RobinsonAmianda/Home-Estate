import CTA from "./CTA";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-seashell-100 flex flex-col items-center justify-start py-14 px-5 box-border gap-[62px] max-w-full text-center text-21xl text-gray-100 font-montserrat mq750:gap-[31px] mq1100:pt-9 mq1100:pb-9 mq1100:box-border mq450:gap-[15px] mq450:pt-[23px] mq450:pb-[23px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[820px] relative bg-seashell-100 hidden max-w-full" />
      <div className="w-[1232px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[452px] relative leading-[140%] font-extrabold inline-block shrink-0 max-w-full z-[1] mq750:text-13xl mq750:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
          What People Say About Dwello
        </div>
      </div>
      <div className="w-[1232px] flex flex-col items-start justify-start gap-[44px] max-w-full text-left text-xl mq750:gap-[22px]">
        <div className="self-stretch grid flex-row items-start justify-start gap-[43px] grid-cols-[repeat(3,_minmax(286px,_1fr))] max-w-full mq750:gap-[21px] mq750:grid-cols-[minmax(286px,_1fr)] mq1100:grid-cols-[repeat(2,_minmax(286px,_497px))] mq1100:justify-center">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-[430px] rounded-lg bg-lightgray overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[196px] px-0 pb-[34px] box-border gap-[28px] max-w-full z-[1] mq750:pt-[127px] mq750:pb-[22px] mq750:box-border mq450:h-auto">
              <img
                className="mt-[-197px] self-stretch h-[169px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/group-15@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border shrink-0 max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[217px] flex flex-row items-start justify-start gap-[12px]">
                      <img
                        className="h-[58px] w-[58px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/mask-group-1@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <b className="relative font-bold mq450:text-base">
                          Sarah Nguyen
                        </b>
                        <b className="relative text-base font-semibold inline-block min-w-[114px]">
                          San Francisco
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5 text-base">
                      <div className="rounded bg-white flex flex-row items-start justify-start py-0.5 px-[5px] gap-[4px]">
                        <div className="h-6 w-[59px] relative rounded bg-white hidden" />
                        <img
                          className="h-5 w-5 relative rounded-12xs-8 min-h-[20px] z-[1]"
                          alt=""
                          src="/label.svg"
                        />
                        <b className="relative font-semibold inline-block min-w-[24px] z-[1]">
                          5.0
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[130%] font-semibold text-dimgray-400">
                    Dwello truly cares about their clients. They listened to my
                    needs and preferences and helped me find the perfect home in
                    the Bay Area. Their professionalism and attention to detail
                    are unmatched.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
            <CTA
              group15="/group-15-1@2x.png"
              maskGroup="/mask-group-2@2x.png"
              michaelRodriguez="Michael Rodriguez"
              sanDiego="San Diego"
              testimonial="4.5"
              iHadAFantasticExperienceW="I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
            />
          </div>
          <CTA
            group15="/group-15-2@2x.png"
            maskGroup="/mask-group-3@2x.png"
            michaelRodriguez="Emily Johnson"
            sanDiego="Los Angeles"
            testimonial="5.0"
            iHadAFantasticExperienceW="Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
            propAlignSelf="unset"
            propMinWidth="100px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="w-[152px] flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-[58px] w-[58px] relative min-h-[58px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-18.svg"
            />
            <img
              className="h-[58px] w-[58px] relative min-h-[58px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-19.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
