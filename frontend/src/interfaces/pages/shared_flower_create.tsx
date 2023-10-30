import React, { Fragment, useEffect, useState } from "react";
import { Input } from "../components/custom_input";
import { Loading } from "../components/alert";
import { Navigate, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { sharedFlowerSchema } from "../../cores/models/shared_flower";
import { useAddSharedFlowerMutation } from "../../cores/features/burial.slice";
import { HomeAside } from "../components/home_aside";
import { useGetFlowerQuery } from "../../cores/features/static_data.slice";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const SharedFlowerCreate = () => {
  const location = useLocation();
  const {
    data: flowers = [],
    isLoading: flowerIsLoading,
    isSuccess: flowerIsSuccess,
  } = useGetFlowerQuery("");
  const [showFlower, setshowFlower] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: { flowerId: 0 },
    resolver: yupResolver(sharedFlowerSchema),
  });
  const [create, { isLoading, isSuccess }] = useAddSharedFlowerMutation();
  const deceasedId = queryParams.get("deceasedId");
  const burialId = queryParams.get("burialId");
  const _onSubmit = handleSubmit((data) => {
    console.log({ ...data, deceasedId });
    if (deceasedId) data.deceasedId = parseInt(deceasedId!);
    create(data);
  });
  useEffect(() => {}, [flowers, setValue]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {isSuccess && (
        <Navigate to={deceasedId ? `/deceased/${burialId}` : `/wish`} />
      )}

      {flowerIsSuccess && (
        <div className="min-h-[600px] flex p-3">
          <div className="grow flex flex-col gap-y-4">
            {" "}
            <span className=" text-3xl font-bold text-kprimary-500 pb-3">
              {" "}
              Envoyer une prière pour un proche
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4 shadow-sm text-center ring-1  ring-kgray-50/30 rounded-md">
                Quand vous laissez une prière sur notre site, chaque dernier
                samedi du mois, un acte symbolique est posé et partagé sur nos
                réseaux sociaux pour l’ensemble des prières redigées par nos
                visiteurs durant le mois. Un acteur symbolique en mémoire de vos
                défunts pour le repos de leurs âmes.
              </div>
              <div className="p-4 shadow-sm text-center ring-1  ring-kgray-50/30 rounded-md"></div>
            </div>
            <div className="ring gap-y-4 ring-kgray-50/10 shadow-md ring-inset rounded-md divide-y">
              <div className="h-12 py-2 px-4">
                <span className="text-xl text-kprimary-500 font-bold">
                  Rediger une prière
                </span>
              </div>

              <form
                className=" p-2 flex relative flex-col gap-y-3"
                onSubmit={_onSubmit}
              >
                <Popover className="relative">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span className="text-7xl">
                      {flowers[watch("flowerId") ?? 0].photoText}
                    </span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-0 z-10 mt-5 flex  -translate-x-1 px-4">
                      <div className=" flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4 grid grid-cols-4">
                          {flowers.map((item) => (
                            <div
                              onClick={() => setValue("flowerId", item.id)}
                              key={item.name}
                              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                            >
                              {/* <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div> */}
                              <div className="flex flex-col w-min items-center justify-center">
                                <p className="mt-1 text-5xl  text-gray-600">
                                  {item.photoText}
                                </p>
                                <span>{item.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-8">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-semibold leading-6 text-gray-500">
                              Recent posts
                            </h3>
                            <a
                              href="#"
                              className="text-sm font-semibold leading-6 text-indigo-600"
                            >
                              See all <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Input label="(caractères utilisés : 11/160)">
                  <textarea
                    className="input2"
                    rows={8}
                    placeholder="Rédigez ici"
                    {...register("comment")}
                  />
                </Input>
                <Input label="(caractères utilisés : 11/160)">
                  <input
                    className="input2"
                    placeholder="Signez ici ( Ex : Ta maman chérie)"
                    {...register("sign")}
                  />
                </Input>
                <button className="btn primary" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div className="w-96">
            <HomeAside />
          </div>
        </div>
      )}
    </>
  );
};
