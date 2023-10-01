import { BuildingLibraryIcon } from '@heroicons/react/20/solid'
import { CalendarDaysIcon } from '@heroicons/react/20/solid'
import {  UserIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import React, { useState } from 'react'

export const TopHeader = () => {
        const [isAvanced, setIsAvanced] = useState<boolean>(false);
  return (
        <div className=" w-full bg_cim ">
        <div
          className={clsx(
            "h-full w-full mx-auto  py-20 text-white items-center px-[200px]  bg-blue-900/50 flex flex-col",
            isAvanced && ""
          )}
        >
          <span className="text-6xl   ">Rechercher un défunt</span>
          <span className="text-center py-10">
            Recherchez les information sur <br /> un défunt proche plus
            facilement
          </span>

          <div className="flex w-full flex-row-reverse items-start">
            <button className="bg-red-500 py-3 px-5 rounded-r-md">
              Rechecher
            </button>
            <div
              className={clsx(
                "grid  grow grid-cols-3  bg-white  search rounded-md rounded-tr-none overflow-hidden",
                { "rounded-br-none": !isAvanced }
              )}
            >
              <div className="input_container grow ">
                <UserIcon className="icon  " />
                <input
                  type="text"
                  placeholder="Nom"
                  className="input  focus:border-red-500 focus:ring-red-500  "
                />
              </div>

              <div className="input_container">
                <UserIcon className="icon  " />
                <input type="text" placeholder="Prénom" className="input" />
              </div>
              <div className="input_container">
                <CalendarDaysIcon className="icon  " />
                <input
                  type="text"
                  placeholder="Date de décés"
                  className="input"
                />
              </div>
              {isAvanced && (
                <>
                  <div className="input_container">
                    <BuildingLibraryIcon className="icon  " />
                    <input
                      type="text"
                      placeholder="Nom du cimtiére"
                      className="input"
                    />
                  </div>
                  <div className="input_container">
                    <CalendarDaysIcon className="icon  " />
                    <input
                      type="text"
                      placeholder="Date de naissance"
                      className="input"
                    />
                  </div>
                  <div className="input_container">
                    <CalendarDaysIcon className="icon  " />
                    <input
                      type="text"
                      placeholder="Date de d'enterrement"
                      className="input"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="ml-auto my-3">
            <button
              className="font-bold"
              onClick={() => setIsAvanced(!isAvanced)}
            >
              Recherche avancé
            </button>
          </div>
        </div>
      </div>
  )
}
