import content from "../images/content.png";
import layer_1 from "../images/Layer_1.png";

const LandingSection_03 = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0 mb-40 justify-end">
      {/* Phần này cho màn hình lớn */}
      <div className="w-full lg:w-[412px] px-0 py-[150px] flex flex-col gap-4 hidden lg:block ml-auto">
        <div>
          <h1 className="font-bold text-[40px] text-[#555770] leading-[54px]">
            <span className="text-[#06C270]">Live</span> Streaming Practice
          </h1>
        </div>
        <div>
          <p className="text-[#555770] font-normal text-[16px] leading-[24px] mt-4 mb-4">
            Engage in real-time dictation practice with multiple users through
            live streaming, enhancing interactive learning and collaborative feedback.
          </p>
        </div>
        <div>
          <button className="w-[180px] h-[44px] rounded-[4px] px-5 py-0 border border-[#8F90A6]">
            JOIN NOW
          </button>
        </div>
      </div>

      {/* Phần này cho màn hình nhỏ */}
      <div className="w-full lg:w-[412px] px-0 py-[50px] flex flex-col gap-4 items-center text-center block lg:hidden ml-auto">
        <div>
          <h1 className="font-bold text-[32px] text-[#555770] leading-[44px]">
            <span className="text-[#06C270]">Live</span> Streaming Practice
          </h1>
        </div>
        <div>
          <p className="text-[#555770] font-normal text-[16px] leading-[24px]">
            Engage in real-time dictation practice with multiple users through live streaming, enhancing interactive learning and collaborative feedback.
          </p>
        </div>
        <div>
          <button className="w-[180px] h-[44px] rounded-[4px] px-5 py-0 border border-[#8F90A6]">
            JOIN NOW
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[1000px] relative flex justify-end lg:justify-end">
        {/* Hình ảnh content nằm trên */}
        <div className="w-[900px] lg:w-[915px] h-[600px] py-[60px] pl-[50px] pr-[25px] absolute lg:ml-auto">
          <div className="w-[840px] h-[27.16px] border border-[#1A202C] bg-[#1A202C] rounded-tl-[16px] rounded-tr-[16px]"></div>
          <img
            src={content}
            className="w-full h-auto lg:h-[572.84px] object-cover"
          />
        </div>

        {/* Hình ảnh layer_1 nằm dưới */}
        <div className="ml-1 lg:ml-auto">
          <img src={layer_1} className="static" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection_03;
