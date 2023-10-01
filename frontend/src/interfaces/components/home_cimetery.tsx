import React from 'react'

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
        <div className="grid grid-cols-3 gap-4 py-3 ">
          {[
            { title: "Cimetières localisés", lenght: 89 },
            { title: "Cimetières localisés", lenght: 89 },
            { title: "Cimetières localisés", lenght: 89 },
          ].map((e) => (
            <div className="bg-blue-500 h-44">
              <span>{e.lenght}</span>
            </div>
          ))}
        </div>
      </div>
  )
}
