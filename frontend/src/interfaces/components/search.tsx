import clsx from 'clsx';
import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick';
import { TopHeader, TopHeader2, TopHeaderSearchCim } from './top_header';
import { useLocation } from 'react-router-dom';
const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        useCSS: true,
        centerPadding: "0px",
      
        className: "flex gap-4",
      };
export const Search = () => {
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);

        const searchIndex = parseInt(queryParams.get("search")??"0");
console.log(searchIndex)
        const [index, setIndex] = useState(searchIndex);
      
  return (
        <Slider
        {...settings}
        afterChange={(val) => {
          setIndex(val);
        }}
        
        customPaging={(i: number) => {
        
          return (
            <div
              className={clsx(
                " my-3 rounded-full",
                i === index ? "bg-kprimary-500" : "bg-gray-400"
              )}
            />
          );
        }}
      >
     { searchIndex===0?
    
 [     <TopHeader/>,
      <TopHeaderSearchCim />].map(item=>item)
      :
      [     <TopHeader/>,
      <TopHeaderSearchCim />].reverse().map(item=>item)
      }
      
      </Slider>
  )
}
