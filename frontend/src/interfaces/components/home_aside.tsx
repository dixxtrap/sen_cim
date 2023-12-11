import React, { ReactNode } from "react";

export const HomeAside = ({top}:{top?:ReactNode}) => {
  return (
    <div className="min-w-[360px] gap-y-4  md:w-[360px]  px-3  flex flex-col">
      {top}
      <Don />
      {/* <Pub /> */}
    </div>
  );
};

export const Pub = () => {
  return (
    <div className="h-[600px] ring_gray flex items-center text-2xl justify-center">
      <span>Espace diffusion PUB</span>
    </div>
  );
};
export const Don = () => {
  return (
    <div className=" ring_gray flex flex-col p-3 gap-y-8 items-center justify-center">
      <span className="text-2xl mx-auto text-center">
        Faire un <span className="text-red-500 font-bold"> don à SenCim </span>
        🧡 pour contribuer à la réussite de ce projet
      </span>
      <button className="bg-red-500 p-2 rounded-md text-white font-bold">
        Faire un don 🧡
      </button>
      <span className="mx-auto text-center">
        (Je donne en toute conscience et liberté, avec joie, sans contrainte, ni
        regret.)
      </span>
    </div>
  );
};
