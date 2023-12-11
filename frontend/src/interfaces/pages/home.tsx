import "../style/home.css";

import { TopHeader } from "../components/top_header";
import { HomeAside } from "../components/home_aside";
import { HomeWishes } from "../components/home_wish";
import { HomeChifferStat } from "../components/home_chiffer_stat";
import { HomeChifferKey } from "../components/home_chiffer_key";
import { HomeCimetery } from "../components/home_cimetery";
import { ObituaryAside } from "../components/obituary_aside";

export const Home = () => {
  return (
    <div className="">
      <TopHeader />
      <div className="flex   bg-sky-50">
        <div className="grow flex flex-col w-[70vw] p-3 gap-y-5 md:gap-y-10">
          <HomeCimetery />
          <HomeChifferKey />
          <HomeWishes />
          <HomeChifferStat />
        </div>
        <HomeAside top={<ObituaryAside />} />
      </div>
    </div>
  );
};


