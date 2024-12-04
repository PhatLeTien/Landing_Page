import devices from "../images/Devices.png";

const LandingSection_01 = () => {
  return (
    <div className="w-full max-w-[808px] mx-auto flex flex-col gap-10 px-6"> {/* Increased gap and padding */}
      <div className="w-full max-w-[700px] mx-auto items-center font-bold">
        <h5 className="text-3xl md:text-[48px] lg:text-[64px] leading-tight md:leading-[64px] lg:leading-[77.45px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4BD9FF] to-[#06C270]">
          Watch, Listen, Learn Fluent English Awaits
        </h5>
      </div>
      <div className="w-full max-w-[300px] h-[70px] bg-[#06C270] px-8 py-2 mx-auto rounded-[4px] flex"> {/* Adjusted max-w and h */}
        <button className="mx-auto text-white text-2xl font-semibold">
          JOIN FOR FREE
        </button>
      </div>
      <div className="h-auto mx-auto mt-14">
        <img src={devices} className="w-full max-w-[1000px] mx-auto" alt="Devices" /> {/* Adjusted max-w */}
      </div>
    </div>
  );
};

export default LandingSection_01;
