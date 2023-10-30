import { BuildingLibraryIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { UserIcon, XCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { ReactNode, useEffect, useState } from "react";
import { useGetDeceasedQuery } from "../../cores/features/deceased.slice";
import { useForm } from "react-hook-form";
import { useSearchBurialMutation } from "../../cores/features/burial.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { burialSearchSchema } from "../../cores/models/burial.model";
import { Dialog } from "@headlessui/react";
import { Modal } from "./dialog";
import { formatDate } from "../../utils/format_date";
import gravesiteImg from "../../assets/img7.png";
import { Link } from "react-router-dom";
export const TopHeader = () => {
  const [isAvanced, setIsAvanced] = useState<boolean>(false);

  const [search, { isError, isLoading, isSuccess, data, reset }] =
    useSearchBurialMutation();
  const {
    formState: { errors },
    handleSubmit,

    register,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      year: 1997,
    },
    resolver: yupResolver(burialSearchSchema),
  });
  const onsubmit = handleSubmit((data) => {
    console.log(data);
    search({
      burial: data,
      pagination: { page: 0, perPage: 50, fromDate: "0000" },
    });
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form onSubmit={onsubmit}>
      <Modal
        isOpen={isSuccess}
        onClose={() => {
          console.log(data);
        }}
      >
        <Dialog.Title
          as="div"
          className="text-lg font-medium pt-3 leading-6 text-gray-900 sticky top-0 bg-white"
        >
          <div className="w-full h-10 flex justify-between  ">
            <span> List des Defunts</span>
            <button
              onClick={reset}
              className="bg-kprimary-500 h-6 w-6 rounded-full"
            >
              <XCircleIcon className="text-white h-6 w-6" />
            </button>
          </div>
        </Dialog.Title>
        {
          <div className="h-[75vh] overflow-scroll">
            <ul role="list" className="divide-y    divide-gray-100">
              {data &&
                data!.map((burial) => (
                  <li key={burial.id} className="">
                    <Link to={`deceased/${burial.id}`} className="flex ">
                      <div className="flex min-w-0 gap-x-4 w-full">
                        <div className="h-12 w-12 rounded-full  bg-gray-50 ">
                          <img
                            className="h-8 w-8 flex-none "
                            src={gravesiteImg}
                            alt=""
                          />
                        </div>{" "}
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {burial.deceased.firstName}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {burial.deceased.lastName}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{`${burial.gravesite.row.section.name}/${burial.gravesite.row.numero}`}</p>
                        {burial.amountPaid ? (
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time dateTime={burial.burialDate}>
                              {burial.amountPaid}
                            </time>
                          </p>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            {/* <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div> */}
                            <p className="text-xs leading-5 text-gray-500">
                              {formatDate(burial.burialDate)}
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        }
      </Modal>
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
            <button type="submit" className="bg-red-500 py-3 px-5 rounded-r-md">
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
                  {...register("firstName")}
                />
              </div>

              <div className="input_container">
                <UserIcon className="icon  " />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="input"
                  {...register("lastName")}
                />
              </div>
              <div className="input_container">
                <CalendarDaysIcon className="icon  " />
                <input
                  type="text"
                  placeholder="Date de décés"
                  className="input"
                  {...register("year")}
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
              {!isAvanced
                ? "> Recherche avancée"
                : "> Retour sur recherche classique"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export const TopHeader2 = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return <div className={clsx("h-96", className)}>
    <div className="w-full h-full bg-blue-900/50 flex items-center justify-center">
    {children}
    </div>
  </div>;
};
