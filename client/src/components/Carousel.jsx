import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => {
          return <img src={s} key={"img" + s} />;
        })}
      </div>

      <div className="absolute top-0 w-full h-full justify-between items-center flex text-white px-5 text-3xl">
        <button onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-2 flex justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
