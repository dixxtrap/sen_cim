
export const HomeWishes = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <span className="text-red-500 text-3xl   font-bold mx-auto">
        Envoyer une prière pour un proche
      </span>
      <div className="grid grid-cols-2 gap-x-4   h-52">
        <div className=' h-full p-2  flex flex-col px-5  rounded-md'>
          <span className="text-center  m-auto">
            Quand vous envoyez une prière sur notre site, un acte symbolique
            est posée pour honorer la mémoire des défunts pour la paix et le
            repos de leurs âmes. chaque dernier samedi du mois, un feu
            d’artfice est tiré au phare des mamelles avec l’ensemble des
            prières du mois redigées par nos visiteurs.
          </span>
          <div className="px-32">
            <button className="ring-1 ring-red-500 p-2 rounded-3xl text-black text-sm font-semibold">Envoyer une prière gratuitement</button>
          </div>

        </div>

        <div className="text-center shadow-md h-full pb-5 px-11 ring-inset ring-1 ring-slate-800/10 rounded-2xl flex flex-col">
          <span className="text-center text-xl m-auto">
            “ Yasmina, je prie que ton ame repose en paix où qu’il soit. Tu nous manques et on te gardear à jamais dans nos coeurs pour l’étenité. ”
          </span>
          <span className="pl-72 text-zinc-600  ">
            Ta chère maman
          </span>
        </div>
      </div>


    </div>
  )
}
