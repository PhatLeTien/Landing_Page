import download from "../images/appdownload.png";
import QRcode from "../images/QR.png";
import GoogleStore from "../images/Google store.png";
import AppleStore from "../images/Apple store.png";

const AppDownload = () => {
  return (
    <div className="w-full h-screen flex flex-row gap-4 bg-gradient-to-br from-[#FDDD48] to-[#00B7C4]">

      {/* Left Section */}
      <div className="w-full lg:w-[40%] h-full mt-8 flex justify-center items-center">
        <img src={download} className="max-h-full" />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[60%] h-full m-4 flex flex-col gap-4 justify-center">
        {/* Title */}
        <div className="h-auto">
          <h1 className="text-[32px] lg:text-[56px] leading-[40px] lg:leading-[67.77px] font-bold">
            Take Your English Journey <br />
            <span className="text-gray-200">On the Go</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="h-auto px-3 py-0 gap-[10px]">
          <p className="font-normal text-[12px] lg:text-[14px] leading-[16.94px] tracking-[2px] text-[#28293D] uppercase">
            Keep learning, anytime, anywhere.
            <br /> Download the app now!
          </p>
        </div>

        {/* QR Code and Store Section */}
        <div className="h-auto flex flex-col gap-[10px] justify-center">
          {/*---QR Code---*/}
          <div className="h-[240px] flex flex-col gap-4">
            <div>
              <h6 className="font-bold text-[16px] leading-[22px]">
                SCAN QR-CODE TO DOWNLOAD:
              </h6>
            </div>
            <div>
              <img src={QRcode} className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px]" />
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="h-[111.96px] flex flex-col gap-4">
            <div className="h-[24px]">
              <h6 className="font-bold text-[16px] leading-[22px]">
                DOWNLOAD NOW ON:
              </h6>
            </div>
            <div className="flex flex-row gap-4">
              <img src={GoogleStore} className="w-[200px] h-[72px] lg:w-[220px] lg:h-[72px]"/>
              <img src={AppleStore} className="w-[200px] h-[72px] lg:w-[220px] lg:h-[72px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
