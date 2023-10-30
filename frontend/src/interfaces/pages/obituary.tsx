import { ShareIcon } from "@heroicons/react/20/solid";
import { useGetObituaryQuery } from "../../cores/features/obituary";
import { Loading } from "../components/alert";
import { HomeAside } from "../components/home_aside";
import { TopHeader2 } from "../components/top_header";
import { formatDate } from "../../utils/format_date";
import { ObituarySearch } from "../components/obituary_search";

export const Obituary = () => {
  const { data = [], isLoading, isSuccess } = useGetObituaryQuery();
  return (
    <>
      <Loading isLoading={isLoading} />
      <TopHeader2 className="bg_jardin">
        <span className=" text-xl md:text-2xl font-medium text-center text-white max-w-lg">
          Repos et paix en mémoire de nos proches partis avant nous. À ceux là
          que nous avons aimés, que leurs âmes reposent en paix.
        </span>
      </TopHeader2>
      <div className="flex p-2 ">
        <div className="grow ring ring-kgray-50/20 ring-inset rounded-md ">
          <div className="flex flex-col divide-y ">
            <div className="p-2 title">
              {" "}
              <span>Consulter les avis de décès</span>
            </div>
            <div className="p-3 flex flex-col gap-4 md:gap-6">
              {data.map((item) => (
                <div className="flex flex-col  rounded-md mx-5 p-3 ring-kgray-50/20 ring-1 ring-inset">
                  <div className="grid grid-cols-3">
                    <div>
                      <img
                        src={`/v1/obituary/file/${item.fileName}`}
                        alt=""
                        className="h-32 w-32 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="font-semibold">CATÉGORIE : AVIS DE DÉCÈS</span>
                      <span className="font-semibold">
                        “ Annonce du décès de {item.deceasedFirstname}{" "}
                        {item.deceasedLastname} publié par {item.userDisplayName} le {formatDate(item.createdAt!)} ”
                      </span>
                      <span>Date de décès : {formatDate(item.deceasedDate!)}</span>

                      <span>Lieu du décès :{item.placeOfDeath}</span>

                      <span>Age : 89 ans</span>

                      <span>Cause : {item.cause}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex  gap-2 items-center justify-center">
                        <span>🙏 PRIÈRES </span>

                        <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                          <span className="text-sm text-center  leading-3 ">
                            {item!.wishes!.length}
                          </span>{" "}
                        </div>
                      </div>
                      <div className="flex  gap-2 items-center justify-center">
                        <span> 🌺 FLEURS </span>
                        <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                          <span className="text-sm text-center  leading-3 ">
                            {item!.flowers!.length}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button className="btn text-white bg-green-500 flex items-center ring-green-200 text">
                      <ShareIcon className="h-6 " />
                      <span>Partager </span>
                    </button>
                    <div className="grow"></div>
                    <button className="btn text-white bg-kprimary-500 flex items-center ring-kprimary-200 text">
                      🙏 Laisser une prière
                    </button>
                    <button className="btn text-white bg-kgray-500 flex items-center ring-kgray-200 text">
                      🌺 Laisser une fleur
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HomeAside top={<ObituarySearch/>} />
      </div>
    </>
  );
};
