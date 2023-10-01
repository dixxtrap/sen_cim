
export const HomeWishes = () => {
  return (
        <div className="flex flex-col gap-y-2 ">
        <span className="text-red-500 text-3xl   font-bold mx-auto">
          Envoyer une prière pour un proche
        </span>
        <div className="grid grid-cols-2 gap-x-4   h-52">
                <div className='shadow-md h-full p-2 ring-inset ring-1 flex px-5 ring-slate-800/10 rounded-md'>
                <span className="text-justify     m-auto">
            Quand vous envoyez une prière sur notre site, un acte symbolique
            est posée pour honorer la mémoire des défunts pour la paix et le
            repos de leurs âmes. chaque dernier samedi du mois, un feu
            d’artfice est tiré au phare des mamelles avec l’ensemble des
            prières du mois redigées par nos visiteurs.
          </span>
                </div>
         
          <div className="text-justify  shadow-md h-full  p-2 ring-inset ring-1 ring-slate-800/10 rounded-md"></div>
        </div>
        <div className="flex ml-auto">
            <button className="bg-red-500  p-2 rounded-md text-white">Envoyer une prière gratuitement</button>
        </div>
 
      </div>
  )
}
