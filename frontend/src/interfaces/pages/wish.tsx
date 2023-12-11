import React, { useState } from "react";
import { HomeAside } from "../components/home_aside";
import { useGetWishesQuery } from "../../cores/features/burial.slice";
import { PaginationDto } from "../../cores/models/pagination.model";
import { WishCreateComponent } from "./wish_create";
import { TopHeader2 } from "../components/top_header";

export const Wish = () => {
  const [pagination, setPagination] = useState<PaginationDto>({
    fromDate: "0000",
    page: 0,
    perPage: 20,
  });
  const { data: wishes, isLoading, isSuccess } = useGetWishesQuery(pagination);
  console.log(wishes);
  return (
    <>
      <TopHeader2 className="bg_jardin">
        <div className="md:px-20 px-3 max-w-2xl flex items-center justify-center">
          <span className="text-center  text-white text-2xl">
          Repos et paix en mémoire de nos proches partis avant nous.  À ceux là que nous avons aimés, que leurs âmes reposent en paix.
          </span>
        </div>
      </TopHeader2>
      <div className="min-h-[600px] flex p-3">
        <div className="grow flex flex-col rounded-md ring-kgray-100/30  divide-kgray-100/30   ring-1 ring-inset   divide-y gap-y-4">
          {" "}
          <span className="pt-3 px-3 text-xl font-bold text-kprimary-500 ">
            {" "}
            Consulter les prières envoyées
          </span>
          <div className="grid grid-cols-2 gap-2 gap-y-5 p-3">
           
            {wishes?.items.map((wish) => (
              <div className="p-3 rounded-md  text-center shadow-md flex flex-col  ring-kgray-100/10 ring-inset ring-1">
                <span>{wish.wish}</span>
                <span className="text-right text-lg font-bold">
                  {wish.sign}
                </span>
              </div>
            ))}
          </div>
          {/* <div className="ring gap-y-4 ring-kgray-50/10 shadow-md ring-inset rounded-md divide-y"></div> */}
        </div>
        <div className="w-96">
          <HomeAside top={<WishCreateComponent />} />
        </div>
      </div>
    </>
  );
};
