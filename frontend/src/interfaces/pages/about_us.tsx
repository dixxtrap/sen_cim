
import { HomeAside } from "../components/home_aside";

export const AboutUs = () => {
  return (
    <>
      {/* <div className="h-32 bg-kgray-50/25 mx-10 my-8">
        <span className="text-2xl font-semibold flex justify-center py-12">Espace diffusion PUB</span>
      </div> */}
      <div className="flex p-2 mx-8 my-5 ">
        <div className=" grow ring ring-kgray-50/20 ring-inset rounded-md">
          <div className="flex flex-col px-10 pb-10 ">
            <span className="flex justify-center text-4xl text-kgray-500 font-semibold py-12">Qui sommes nous ?</span>
            <div>
              <p>
                <span className="font-bold">SenCim.</span> est un projet innovant qui met la technologie et le digital au coeur de la gestion des cimetières.
                qui a ambition de créer des “cimetières smart” au Sénégal grace au moyen de la technologie et du numérique.<br/><br/>
                La digitalisation, plus qu’une opportunité, devient une nécessité tous secteurs confondus. Le marché funéraire, concerné au même titre que tout autre, a tardé à opérer sa transition. En cause : Le manque d’initiative, le tabou sous-jacent au sujet de la mort.<br/><br/>
                Nous sommes convaincus que le digital peut être un moyen de simplifier et d’accélérer le processus de gestion et d’accès à l’information dans les cimetières du Sénégal. C’est pourquoi le choix que fait <span className="font-bold">SenCim.</span> qui est celui d’accompagner les collectivités dans cette démarche à l’aide du digital est motivé par le bon sens et son ambition d’universalité.
              </p>
            </div>
          </div>
        </div>
        <HomeAside />
      </div>

    </>
  );
};
