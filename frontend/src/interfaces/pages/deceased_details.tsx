import { Link, useParams } from "react-router-dom";
import { useGetBurialByIdQuery } from "../../cores/features/burial.slice";
import gravesiteImg from "../../assets/img7.png";
import { Loading } from "../components/alert";
import { HomeAside } from "../components/home_aside";
import { ShareIcon } from "@heroicons/react/20/solid";
import { formatDate } from "../../utils/format_date";
import { TopHeader2 } from "../components/top_header";

export const DeceasedDetails = () => {
  const id = useParams().id;
  const {
    data: burial,
    isLoading,
    // isSuccess,
    // isError,
  } = useGetBurialByIdQuery(id!);
  console.log(burial);
  return (
    <>
      <Loading isLoading={isLoading} />
      <TopHeader2 className="bg_jardin">
        <span className="leading-8 text-2xl text-white w-[500px] text-center">
          Repos et paix en mémoire de nos proches partis avant nous. À ceux là
          que nous avons aimés, que leurs âmes reposent en paix.
        </span>
      </TopHeader2>
      <div className="flex  min-h-[75vh] py-3">
        {burial && (
          <>
            <div className="grow flex flex-col p-2 gap-3 ">
              <div className=" flex justify-around px-3 gap-x-3 ">
                <span className="text-kprimary-500    font-bold">
                  {burial.deceased.firstName} {burial.deceased.lastName}
                </span>
                <div className="grow"></div>
                <div className="flex  gap-2 items-center justify-center">
                  <span>🙏 PRIÈRES </span>

                  <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                    <span className="text-sm text-center  leading-3 ">
                      {burial.deceased.wishes.length}
                    </span>{" "}
                  </div>
                </div>
                <div className="flex  gap-2 items-center justify-center">
                  <span> 🌺 FLEURS </span>
                  <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                    <span className="text-sm text-center  leading-3 ">
                      {burial.deceased.flowers.length}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="ring-2 ring-inset ring-kgray-50/10 gap-y-3  divide-y  divide-double">
                <div className="py-3 flex items-center justify-around">
                  <div className="relative flex flex-col gap-y-3 items-center">
                    <div
                      className={`h-40 w-40 rounded flex items-center justify-center   shadow-md ml-10 mt-5 bg-[url("${gravesiteImg}")]`}
                    >
                      <div className="gravesite_bg h-[92%] w-[92%] text-center flex items-center justify-center">
                        <span className="font-serif italic text-white">
                          RIP
                          <br />
                          {burial.deceased.firstName}
                          <br />
                          {burial.deceased.lastName}
                          <br />
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className="bg-green-600 px-3 flex  rounded-md items-center justify-center gap-3 py-1.5 text-white">
                        <ShareIcon className="h-4 w-4 " />
                        <span>Partager</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col leading-10">
                    <div>
                      Date de décès : {formatDate(burial.deceased.dateOfDeath)}
                    </div>
                    <div>
                      Date d’enterrement : {formatDate(burial.burialDate)}
                    </div>
                    <div>
                      Adresse tombe : Section{" "}
                      {burial.gravesite.row.section.name} / Série{" "}
                      {burial.gravesite.row.numero} / N°{" "}
                      {burial.gravesite.platNumber}
                    </div>
                    <div>Cimetière : Saint-Lazarre</div>
                    <div>
                      Lien Maps * :
                      <a
                        href={burial.gravesite.row.section.link}
                        target="_blank"
                        className="text-blue-500 font-medium"
                      >
                        {" "}
                        Clique pour Obtenir la direction
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="flex items-center flex-col p-2 justify-center ">
                    <div className="h-[80vh]  overflow-y-scroll">
                      {burial.deceased.wishes.map((wish) => (
                        <div className="p-3 rounded-md  text-center shadow-md flex flex-col  ring-kgray-100/10 ring-inset ring-1">
                          <span>{wish.wish}</span>
                          <span className="text-right text-lg font-bold">
                            {wish.sign}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/wish/create?burialId=${burial.id}&deceasedId=${burial.deceasedId}`}
                      className="btn primary"
                    >
                      🙏 Laisser une prière
                    </Link>
                  </div>

                  <div className="flex items-center flex-col p-2 justify-center ">
                    <div className="h-[80vh]  flex flex-col gap-y-4 overflow-y-scroll">
                      {burial.deceased.flowers.map((flowerShared) => (
                        <div className="p-3 rounded-md  text-center shadow-md flex flex-col  ring-kgray-100/10 ring-inset ring-1">
                         <div className="flex items-center justify-center">
                          <span className="text-9xl">
                            {flowerShared.flower.photoText}
                          </span>
                          <span>{flowerShared.comment}</span>
                         </div>
                         <div>
                          <span></span>
                         <span className="text-right text-lg font-bold">
                            {flowerShared.sign}
                          </span>
                         </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/shared_flower/create?burialId=${burial.id}&deceasedId=${burial.deceasedId}`}
                      className="btn primary"
                    >
                      🌺 Laisser une fleur
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96">
              {/* <Don /> */}
              <HomeAside />
            </div>
          </>
        )}
      </div>
    </>
  );
};
