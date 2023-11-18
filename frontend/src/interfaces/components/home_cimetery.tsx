import React from 'react'
import jf from "../../assets/joal-fadiouth.png"
import ba from "../../assets/bel-air.png"
import sl from "../../assets/sain-lazarre.png"
export const HomeCimetery = () => {
  return (
    <div className="flex flex-col py-4 ">
      <span className="text-red-500 text-3xl font-bold mx-auto">
        Nos Cimetières
      </span>
      <span className="mx-auto">
        {" "}
        Les cimetières du Sénégal repertoriés dans notre base
      </span>
      <div className="grid grid-cols-3 gap-4 py-3  relative">
        {[
          { title: "Joal Fadiouth", lenght: 89, img: jf },
          { title: "Saint-Lazarre", lenght: 89, img: sl },
          { title: "Bel-Air", lenght: 89, img: ba },
        ].map((e) => (
          <div className=" h-44 ">
            <div className='absolute '>
              <img src={e.img} className=' top-0 bottom-0 ' />
            </div>
            <div className=' flex flex-row justify-between pr-10 h-10 pt-2 pl-5 bg-white bg-opacity-40 relative -bottom-44'>
              <span className='text-black font-extrabold'>{e.title}</span>
              <button className="ring-1 h-5 ring-red-500 px-5 rounded-3xl text-black text-sm font-semibold">Découvrir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
