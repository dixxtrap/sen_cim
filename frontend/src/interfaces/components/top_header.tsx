import {
  BuildingLibraryIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import {
  ChevronRightIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import  { ReactNode, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useSearchBurialMutation } from "../../cores/features/burial.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Burial,
  BurialSearch,
  burialSearchSchema,
} from "../../cores/models/burial.model";
import { Dialog } from "@headlessui/react";
import { Modal } from "./dialog";
import { formatDate } from "../../utils/format_date";
import gravesiteImg from "../../assets/img7.png";
import { Link } from "react-router-dom";
import { initialPagination } from "../../cores/models/pagination.model";
import { Loading } from "./alert";
import * as Yup from "yup"
import { useGetCimeteryQuery } from "../../cores/features/cimetery";
import { Cimetery } from "../../cores/models/cimetery.model";
export const TopHeader = () => {
  const [isAvanced, setIsAvanced] = useState<boolean>(false);
  const [paginate, setPaginate] = useState(initialPagination);
  const [burial, setBurial] = useState<BurialSearch>({
    firstName: "",
    lastName: "",
    year: 1997,
  });
  const [search, { isLoading, isSuccess, data: deceased=[], reset , }] =
    useSearchBurialMutation();
  const {
    formState: { errors },

    handleSubmit,

    register,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: yupResolver(burialSearchSchema),
  });
  const onsubmit = handleSubmit((data) => {
    reset();
    setBurial(data)
    setPaginate(initialPagination);
    search({
      burial: data,
      pagination: paginate,
    });
  });

  return (
    <form onSubmit={onsubmit}>
      <Loading isLoading={isLoading} />
      <Modal
        isOpen={isSuccess}
        onClose={() => {
          console.log(deceased);
          setPaginate(initialPagination);
          reset();
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
              {isSuccess &&
               
                deceased &&
                deceased?.map((item: Burial) => (
                  <li key={item.id} className="">
                    <Link to={`deceased/${item.id}`} className="flex ">
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
                            {item.deceased.firstName}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {item.deceased.lastName}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          section :{" "}
                          {`${item.gravesite.row.section.name}/ ligne: ${item.gravesite.row.numero}`}
                        </p>
                        {item.amountPaid ? (
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time dateTime={item.burialDate}>
                              {item.amountPaid}
                            </time>
                          </p>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            {/* <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div> */}
                            <p className="text-xs leading-5 text-gray-500">
                              {formatDate(item.burialDate)}
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
        <Dialog.Title
          as="div"
          className="text-lg font-medium pt-3 leading-6  text-gray-900 sticky bottom-0 "
        >
          <div className="flex justify-between">
            <div>
              <span className="font-bold  ">
                {/* Total : {deceased}{" "} */}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={async () => {
                  if (paginate!.page > 0 ) {
                  
                   
                    search({ pagination: {...paginate, page:paginate.page-1}, burial: burial });
                    await setPaginate((prev) => {
                      return { ...prev, page: paginate.page - 1 };
                    });
                  }
                }}
              >
                <ChevronLeftIcon className="h-5" />
              </button>
              <span className="font-bold p-2">{paginate?.page+1}</span>
              <button
                onClick={() => {
                  if (deceased && deceased.length>=paginate.perPage) {
                    search({ pagination: {...paginate, page:paginate.page+1}, burial: burial });
                    setPaginate((prev) => {
                      return { ...prev, page: paginate.page + 1 };
                    });
                  
                  }
                }}
              >
                <ChevronRightIcon className="h-5" />
              </button>
            </div>
          </div>
        </Dialog.Title>
      </Modal>
      <div className=" w-full bg_cim ">
        <div
          className={clsx(
            " w-full mx-auto  h-96 text-white items-center px-[200px] gap-3  bg-blue-900/50 flex flex-col justify-center",
            isAvanced && ""
          )}
        >
          <span className="text-6xl   ">Rechercher un défunt</span>
          <span className="text-center text-xl text-white/90">
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
                  {...register("lastName")}
                />
              </div>

              <div className="input_container divide-x-2">
                <UserIcon className="icon  " />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="input"
                  {...register("firstName")}
                />
              </div>
              <div className="input_container divide-x-2">
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
                  <div className="input_container divide-y-2">
                    <BuildingLibraryIcon className="icon  " />
                    <input
                      type="text"
                      placeholder="Nom du cimtiére"
                      className="input"
                    />
                  </div>
                  <div className="input_container divide-x-2 divide-y-2">
                    <CalendarDaysIcon className="icon  " />
                    <input
                      type="text"
                      placeholder="Date de naissance"
                      className="input"
                    />
                  </div>
                  <div className="input_container divide-x-2 divide-y-2">
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
          <div className="ml-auto mt-3">
            <button
              className="font-bold"
              onClick={() => setIsAvanced(!isAvanced)}
            >
              {!isAvanced
                ? "> Recherche avancée"
                : "> Retour sur recherche classique"}
            </button>
          </div>
          <div className="my-3 flex gap-4" >
          <Link to={"/?search=1"}  >
<div  className="h-5 w-5 bg-gray-200/90 rounded-full"></div>
          </Link>
<div  className="h-5 w-5 bg-kprimary-500/90 rounded-full"></div>

          
        </div>
        </div>
        
      </div>
      
    </form>
  );
};

export const TopHeaderSearchCim = () => {
  const {register, handleSubmit, }=useForm({
    defaultValues:{city:"",address:"", name:"" },
    resolver:yupResolver(Yup.object({
      city:Yup.string(),
      address:Yup.string(),
      name:Yup.string(),
    }))
  })
  const {data:cimeteries=[]}=useGetCimeteryQuery("");
  const [filterSearch,setFilterSearch]=useState<Cimetery[]>()
const _onsubmit=handleSubmit((data:{city?:string, address?:string, name?:string})=>{
  console.log(data);
setFilterSearch(cimeteries.filter(item=>item.city.includes(data?.city??"")&&item.name.includes(data.name??"")))
})
  return (
    <>
    <Modal isOpen={filterSearch?.length!>0} onClose={()=>setFilterSearch([])}>
    <Dialog.Title
          as="div"
          className="text-lg font-medium pt-3 leading-6 text-gray-900 sticky top-0 bg-white"
        >
          <div className="w-full h-10 flex justify-between  ">
            <span> List des Defunts</span>
            <button
              onClick={()=>setFilterSearch([])}
              className="bg-kprimary-500 h-6 w-6 rounded-full"
            >
              <XCircleIcon className="text-white h-6 w-6" />
            </button>
          </div>
        </Dialog.Title>
      {
        filterSearch?.map(item=> <div className="flex ">
         <div className="h-10 w-10">
         <img
                            className="h-8 w-8 flex-none "
                            src={item.photo?`v1/file/${item.photoName}`:gravesiteImg}
                            
                            alt=""
                          />
         </div>
         <div className="flex flex-col">
         <span className="font-bold">
            {item.name}
          </span>
          <span>
            {item.address}
          </span>
         </div>
        </div>)
      }
    </Modal>
    <form onSubmit={_onsubmit}>
    <div className=" w-full bg_cim h-96">
      <div
        className={clsx(
          "h-full w-full mx-auto  py-20 text-white items-center px-[200px]  bg-blue-900/50 flex flex-col",
          // isAvanced && ""
        )}
      >
        <span className="text-6xl   ">Rechercher un cimetière</span>
        <span className="text-center py-10 text-xl">
          Trouvez les informations sur les cimetières du Sénégal <br></br>qui sont repertoriés dans notre base
          </span>

        <div className="flex w-full flex-row-reverse items-start">
          <button type="submit" className="bg-red-500 py-3 px-5 rounded-r-md">
            Rechecher
          </button>
          <div
            className={clsx(
              "grid  grow grid-cols-3  bg-white  search rounded-md rounded-tr-none overflow-hidden  rounded-br-none",
             
            )}
          >
            <div className="input_container grow ">
              <UserIcon className="icon  " />
              <input
                type="text"
                placeholder="Ville"
                className="input  focus:border-red-500 focus:ring-red-500  "
                {...register("city")}
              />
            </div>

            <div className="input_container divide-x-2">
              <UserIcon className="icon  " />
              <input
                type="text"
                placeholder="Commune"
                className="input"
                {...register("address")}
              />
            </div>
            <div className="input_container divide-x-2">
              <CalendarDaysIcon className="icon  " />
              <input
                type="text"
                placeholder="Nom du cimetiére"
                className="input"
                {...register("name")}
              />
            </div>
          
          </div>
        </div>
        {/* <div className="ml-auto my-3">
          <button
            className="font-bold"
            onClick={() => setIsAvanced(!isAvanced)}
          >
            {!isAvanced
              ? "> Recherche avancée"
              : "> Retour sur recherche classique"}
          </button>
        </div> */}
        <div className="my-3 flex gap-4" >
<div  className="h-5 w-5 bg-kprimary-500/90 rounded-full"></div>

          <Link to={"/?search=0"}  >
<div  className="h-5 w-5 bg-gray-200/90 rounded-full"></div>
          </Link>
        </div>
      </div>
    </div>
  </form>
  </>
  );
};



export const TopHeader2=({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
})=>{
return  (<div className={" w-full bg_cim h-96  "+ className}>
<div
  className={clsx(
    "h-full w-full mx-auto  py-20 text-white items-center px-[200px]  bg-blue-900/50 flex  justify-center",
    // isAvanced && ""
  )}
>
  {children}
  </div></div>)
}