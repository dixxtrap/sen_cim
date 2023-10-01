import React from 'react'

export const HomeAside = () => {
  return (
        <div className="min-w-[360px] gap-y-4  md:gap-10 py-10 px-3 md:py-20 flex flex-col">
                <div className="h-96 ring_gray"></div>
                <div className=" ring_gray flex flex-col p-3 gap-y-8 items-center justify-center">
                        <span className='text-3xl mx-auto text-center'>
                        Faire un <span className='text-red-500 font-bold'>  don à SenCim </span>🧡 pour contribuer à la réussite de ce projet
                        </span>
                        <button className='bg-red-500 p-2 rounded-md text-white font-bold'>Faire un don 🧡</button>
                        <span className='mx-auto text-center'>(Je donne en toute conscience et liberté, avec joie, sans contrainte, ni regret.)</span>
                </div>
                <div className="h-[400px] ring_gray"></div>
        </div>
  )
}
