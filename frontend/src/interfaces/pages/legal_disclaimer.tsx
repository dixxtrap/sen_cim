import React from 'react'
import { HomeAside } from '../components/home_aside';

export const LegalDisclaimer = () => {
  return (
    <>
      {/* <div className="h-32 bg-kgray-50/25 mx-10 my-8">
        <span className="text-2xl font-semibold flex justify-center py-12">Espace diffusion PUB</span>
      </div> */}
      <div className="flex p-2 mx-8 my-5  ">
        <div className="grow ring ring-kgray-50/20 ring-inset rounded-md">
          <div className="flex flex-col px-10 pb-10 ">
            <span className="flex justify-center text-4xl text-kgray-500 font-semibold py-12">Mentions légales</span>
            <div>
              <p>
                
              <span className="font-bold">Utilisation du site<br /><br /></span>

                L’accès et l’utilisation du site www.sencim.com sont soumis au respect des Conditions Générales de Vente, aux présentes Mentions Légales et à la Politique de Confidentialité.<br /><br />

                <span className="font-bold">Editeur<br /><br /></span>

                Ce site www.sencim.com est édité par la société <span className="font-bold">OpenCim.</span> basée à Dakar.<br /><br />

                <span className="font-bold">Hébergeur<br /><br /></span>

                l’hébergement du site est assuré par l’hébergeur LWS.
              </p>
            </div>
          </div>
        </div>
        <HomeAside />
      </div>

    </>
  );
}
