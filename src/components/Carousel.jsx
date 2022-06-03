import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const data = [
  {
    url: "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1449480881392-716d0ea24a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = data.length;
  console.log(slide);
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {data.map((gambar, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img
              className="w-full rounded-md object-cover"
              src={gambar.url}
              alt="/"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
