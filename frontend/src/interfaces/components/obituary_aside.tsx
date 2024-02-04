import { useGetObituaryQuery } from "../../cores/features/obituary";
import { formatDate } from "../../utils/format_date";
import { Loading } from "./alert";
import { Link } from "react-router-dom";

export const ObituaryAside = () => {
  const { data = [], isLoading } = useGetObituaryQuery("");

  return (
    <>
      <Loading isLoading={isLoading} />
      {data[0] && (
        <div className="min-h-[500px] ring_gray flex flex-col px-2 py-4">
          <span className="font-semibold text-center">
            CATÉGORIE : {data[0]?.category}
          </span>
          <div className="flex flex-row pt-4 ml-1">
            <img
              src={`/v1/obituary/file/${data[0]?.fileName}`}
              alt=""
              className="h-28 w-52 rounded-full"
            />
            <span className="text-center">
              “ Annonce du décès <br /> de {data[0]?.deceasedFirstname} <br />
              {data[0]?.deceasedLastname} publié par {data[0]?.userDisplayName}{" "}
              le {formatDate(data[0]!.createdAt!)} ”
            </span>
          </div>
          <div className="py-8 flex flex-col">
            <span>Date de décès : {formatDate(data[0]!.deceasedDate!)}</span>

            <span>Lieu du décès : {data[0]?.placeOfDeath}</span>

            <span>Age : {data[0]?.age} ans</span>

            <span>Cause : {data[0]?.cause}</span>
          </div>
          <div className="flex flex-row gap-4 justify-around">
            <div className="flex  gap-2 items-center justify-center">
              <span>🙏 PRIÈRES </span>
              <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                <span className="text-sm text-center  leading-3 ">
                  {data[0]?.wishes!.length}
                </span>{" "}
              </div>
            </div>
            <div className="flex  gap-2 items-center justify-center">
              <span> 🌺 FLEURS </span>
              <div className="h-6 w-6 text-white text-center rounded-full font-bold bg-green-600">
                <span className="text-sm text-center  leading-3 ">
                  {data[0]?.flowers!.length}
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around py-8 ">
            <button className="btn text-black ring-1 bg-white flex items-center ring-kprimary-500 text-xs font-semibold rounded-full">
              🙏 Laisser une prière
            </button>
            <button className="btn text-black ring-1 flex items-center ring-kprimary-500 text-xs font-semibold rounded-full">
              🌺 Laisser une fleur
            </button>
          </div>
          <Link to={"/obituary/create"}   className="text-center text-kprimary-500 underline pb-3">
            <span>Publier un avis de décès</span>
          </Link>
          <Link to={"/obituary/create"} className="text-center text-kprimary-500 underline pb-3">
            <span>Publier un souvenir de décès</span>
          </Link>
          <Link to={"/obituary/create"}  className="text-center text-kprimary-500 underline pb-3">
            <span>Publier un anniversaire de décès</span>
          </Link>
        </div>
      )}
    </>
  );
};
