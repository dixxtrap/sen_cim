import jf from "../../assets/joal-fadiouth.png";
import ba from "../../assets/bel-air.png";
import sl from "../../assets/sain-lazarre.png";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clsx from "clsx";
import { useState } from "react";
import { useGetCimeteryQuery } from "../../cores/features/cimetery";
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  useCSS: true,
  centerPadding: "20px",

  className: " hidden md:block",
};
const settings2: Settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  useCSS: true,
  centerPadding: "20px",

  className: "flex gap-4 md:gap-6 ",
};
export const HomeCimetery = () => {
  const [index, setIndex] = useState(0);
  const {
    data: cimeteries = [],
    isLoading,
    isSuccess,
  } = useGetCimeteryQuery("");
  return (
    <div className="flex flex-col py-4 gap-y-8 ">
      <span className="text-red-500 text-3xl font-bold mx-auto">
        Nos Cimetières
      </span>
      <span className="mx-auto">
        {" "}
        Les cimetières du Sénégal repertoriés dans notre base
      </span>
      {cimeteries && isSuccess && (
        <>
        <Slider
          {...settings}
          afterChange={(val) => {
            setIndex(val);
          }}
          customPaging={(i: number) => {
            console.log(i);
            return (
              <div
                className={clsx(
                  "h-5 w-5  my-3 rounded-full",
                  i === index ? "bg-kprimary-500" : "bg-gray-400"
                )}
              />
            );
          }}
        >
         
          {cimeteries.slice(0,8)
            
            .map((e) => (
              <div className="px-2 md:px-4">
                <div className="relative h-44 ">
                  <div className="   h-full w-full rounded-md overflow-hidden flex items-end justify-items-end  ">
                    <img
                      src={`v1/file/${e.photoName}`}
                      className=" h-full w-full rounded-md  absolute "
                    />

                    <div className=" flex flex-row  justify-between pr-4  py-2 pl-5 w-full bg-white bg-opacity-40 relative ">
                      <span className="text-black  text-sm font-extrabold">
                        {e.name}
                      </span>
                      <button className="ring-1 h-5 ring-red-500 px-5 rounded-3xl text-black text-sm font-semibold">
                        Découvrir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <div className="visible md:hidden">
        <Slider
          {...settings2}
          afterChange={(val) => {
            setIndex(val);
          }}
          customPaging={(i: number) => {
            console.log(i);
            return (
              <div
                className={clsx(
                  "h-5 w-5  my-3 rounded-full",
                  i === index ? "bg-kprimary-500" : "bg-gray-400"
                )}
              />
            );
          }}
        >
         
          {cimeteries.slice(0,8)
            
            .map((e) => (
              <div className="px-2 md:px-4">
                <div className="relative h-44 ">
                  <div className="   h-full w-full rounded-md overflow-hidden flex items-end justify-items-end  ">
                    <img
                      src={`v1/file/${e.photoName}`}
                      className=" h-full w-full rounded-md  absolute "
                    />

                    <div className=" flex flex-row  justify-between pr-4  py-2 pl-5 w-full bg-white bg-opacity-40 relative ">
                      <span className="text-black  text-sm font-extrabold">
                        {e.name}
                      </span>
                      <button className="ring-1 h-5 ring-red-500 px-5 rounded-3xl text-black text-sm font-semibold">
                        Découvrir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        </div>
        </>
      )}
    </div>
  );
};
