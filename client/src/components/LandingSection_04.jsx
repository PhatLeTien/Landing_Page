import content from "../images/content.png";
import layer_2 from "../images/Layer_2.png";

const LandingSection_04 = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row gap-6 px-2 lg:px-0 mb-40">
      {/* Phần này cho màn hình nhỏ - luôn nằm trên */}
      <div className="w-full lg:w-[412px] px-0 py-[50px] flex flex-col gap-4 items-center text-center block lg:hidden">
        <div>
          <h1 className="font-bold text-[32px] text-[#555770] leading-[44px]">
            <span className="text-[#06C270]">Pronunciation</span> Error
            Measurement
          </h1>
        </div>
        <div>
          <p className="text-[#555770] font-normal text-[16px] leading-[24px] ">
            Accurately track and measure pronunciation errors during dictation
            to provide actionable feedback and improve spoken English skills.
          </p>
        </div>
        <div>
          <button className="w-[180px] h-[44px] rounded-[4px] px-5 py-0 border border-[#8F90A6]">
            START LEARNING
          </button>
        </div>
      </div>

      {/* Căn trái cho màn hình lớn */}
      <div className="w-full lg:w-[1000px] relative flex justify-center lg:justify-start">
        <div className="w-[900px] lg:w-[915px] h-[600px] py-[60px] pl-[50px] pr-[25px] ml-[-50px] absolute">
          <div className="w-[825px] lg:w-[841px] h-[27.16px] border border-[#1A202C] bg-[#1A202C] rounded-tl-[16px] rounded-tr-[16px] ml-4 lg:ml-12"></div>
          <img
            src={content}
            className="w-full h-auto lg:h-[572.84px] object-cover ml-4 lg:ml-12"
          />
        </div>
        <div className="ml-1">
          <img src={layer_2} className="static" />
        </div>
      </div>

      {/* Phần này cho màn hình lớn - bên phải */}
      <div className="w-full lg:w-[412px] px-0 py-[150px] flex flex-col gap-4 hidden lg:block lg:order-2 text-left">
        <div>
          <h1 className="font-bold text-[40px] text-[#555770] leading-[54px]">
            <span className="text-[#06C270]">Pronunciation</span> Error
            Measurement
          </h1>
        </div>
        <div>
          <p className="text-[#555770] font-normal text-[16px] leading-[24px] mt-4 mb-4">
            Accurately track and measure pronunciation errors during dictation
            to provide actionable feedback and improve spoken English skills.
          </p>
        </div>
        <div>
          <button className="w-[180px] h-[44px] rounded-[4px] px-5 py-0 border border-[#8F90A6]">
            START LEARNING
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection_04;
