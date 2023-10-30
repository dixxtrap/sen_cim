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
            { title: "Joal Fadiouth", lenght: 89, img:jf },
            { title: "Sain-Lazarre", lenght: 89 , img:sl},
            { title: "Bel-Air", lenght: 89, img:ba },
          ].map((e) => (
            <div className="bg-blue-500 h-44 flex flex-col relative">

              <img src={e.img} className=' top-0 bottom-0 '/>
              <span>{e.title}</span>
            </div>
          ))}
        </div>
      </div>
  )
}
