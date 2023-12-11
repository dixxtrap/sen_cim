import { useGetCimeteryQuery } from '../../cores/features/cimetery';
import { useGetDeceasedQuery } from '../../cores/features/deceased.slice';

export const HomeChifferKey = () => {

  return (
        <div className="bg_cim ">
        <div className="w-full h-full py-5 md:py-10  bg-blue-900/50 flex flex-col">
          <span className="text-3xl font-bold text-white mx-auto pb-4 ">
            Les chiffres clés
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
            {[
              { title: "Cimetières localisés", lenght: 89 },
              { title: "Cimetières inventoriés", lenght: useGetCimeteryQuery("").data?.length },
              { title: "Défunts repertoriés", lenght: useGetDeceasedQuery("").data?.length},
            ].map((e) => (
              <div className="bg-white rounded-md h-36 flex flex-col items-center justify-center">
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
