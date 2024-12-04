import Carousel from "./Carousel";

const slides = [
  "https://yanaphotography.co.uk/wp-content/uploads/2020/05/24-17559-post/Zoom_background_Canada_8_Yana_Photography_web.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
  "https://th.bing.com/th/id/R.49107f70588d64b2967c11eb77621e27?rik=N5GiO1QLZXr%2b%2fg&pid=ImgRaw&r=0",
];

const LandingSection_02 = () => {
  return (
    <div className="flex flex-col gap-10 px-6"> {/* Increased gap and padding */}
      <div className="max-w-3xl mx-auto flex flex-col gap-6"> {/* Increased gap */}
        <div className="w-full">
          <h1 className="text-center font-bold text-[#555770] leading-[54px] text-[36px] md:text-[48px]"> {/* Adjusted text sizes */}
            <span className="text-[#06C270]">Diverse</span> Multimedia Content
          </h1>
        </div>
        <div className="w-full">
          <p className="text-[#596780] text-center text-[16px] md:text-[18px] leading-[28px]"> {/* Adjusted text sizes */}
            Access a variety of video and audio materials, including hot trends,
            TOEIC, IELTS, TOEFL, and daily
            <br /> conversations for comprehensive English
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-full max-w-[200px] h-[50px] px-6 py-0 font-normal text-[16px] border border-[#8F90A6] rounded-[4px] text-[#1C1C28]"> {/* Adjusted button size */}
            DISCOVER NOW
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pb-5">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default LandingSection_02;
