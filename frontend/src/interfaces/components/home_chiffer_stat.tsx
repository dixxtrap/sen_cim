import React from 'react'

export const HomeChifferStat = () => {
  return (
        <div className="bg_cim ">
        <div className="w-full h-full py-5 md:py-10  bg-blue-900/50 flex flex-col">
          <span className="text-3xl font-bold text-white mx-auto pb-4 ">
          Notre site en quelques chiffres 
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
            {[
              { title: "Visites/mois", lenght: "25 000+" },
              { title: "Recherches/mois", lenght: "10 000+" },
              { title: "Avis de décès/mois", lenght: "500+" },
            ].map((e) => (
              <div className="bg-white h-36 flex flex-col items-center justify-center">
                <span className="text-red-500 font-bold text-2xl">
                  {e.lenght}
                </span>
                <span className="text-red-500  text-2xl">{e.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
