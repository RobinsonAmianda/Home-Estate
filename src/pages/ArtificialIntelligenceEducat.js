import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const ArtificialIntelligenceEducat = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[143px] tracking-[normal] leading-[normal] mq750:gap-[71px] mq450:gap-[36px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[75px] box-border max-w-full mq750:pb-8 mq750:box-border mq1100:pb-[49px] mq1100:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[1050.8px] w-[1050px] absolute !m-[0] right-[-65px] bottom-[-163.8px] object-cover z-[2]"
            alt=""
            src="/hero-image-1@2x.png"
          />
          <FrameComponent6 />
          <FrameComponent5 />
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default ArtificialIntelligenceEducat;
