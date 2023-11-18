import React from 'react'
import { HomeAside } from '../components/home_aside';

export const PrivacyPolicy = () => {
  return (
    <>
      {/* <div className="h-32 bg-kgray-50/25 mx-10 my-8">
        <span className="text-2xl font-semibold flex justify-center py-12">Espace diffusion PUB</span>
      </div> */}
      <div className="flex p-2 mx-8 my-5  ">
        <div className="grow ring ring-kgray-50/20 ring-inset rounded-md">
          <div className="flex flex-col px-10 ">
            <span className="flex justify-center text-4xl text-kgray-500 font-semibold py-12">CGU & confidentialité.</span>
            <div className='py-10'>
              <p>
                <span className="font-bold"> Politique de protection des données</span><br /><br />

                Chaque service en ligne limite la collecte des données personnelles au strict nécessaire (minimisation des données) et s’accompagne d’une information sur :<br />
                &nbsp;.&nbsp;le responsable du traitement et les objectifs du recueil de ces données (finalités) ;<br />
                &nbsp;.&nbsp;la base juridique du traitement de données ;<br />
                &nbsp;.&nbsp;le caractère obligatoire ou facultatif du recueil des données pour la gestion de votre demande et le rappel des catégories de données traitées ;<br />
                &nbsp;.&nbsp;la source des données (lorsque d’autres données que celles fournies via le service en ligne sont utilisées pour le traitement de votre demande) ;<br />
                &nbsp;.&nbsp;les catégories de personnes concernées ;<br />
                &nbsp;.&nbsp;la durée de conservation des données ;<br />
                &nbsp;.&nbsp;les mesures de sécurité (description générale).<br /><br />

                <span className="font-bold">Catégories de données personnelles traitées</span><br /><br />

                Dans le cadre de la plateforme <span className='font-bold'>Sencim.com</span> qui permet aux particuliers de rechercher un défunt, un cimetière et de connaitre l’emplacement d’une sépulture, lMais égalment de déposer une prière, un avis ou anniversaire de décès, nous ne demandons aux particuliers aucune données personnelles sauf dans le cadre de la publication d’un avis de décès, d’une prière où nous demandons le nom et prénom des visiteurs et nous leur informons q’aucune de ces données n’est sauvergardée après le délais de publication.

                En revanche, les seules données personnelles publiées sur la plateforme <span className='font-bold'>Sencim.com</span>, à défaut de refus explicite des ayants droits, des défunts de leur vivant ou de tout autre tiers de confiance amené à exécuter les directives du défunt, sont :<br />
                &nbsp;.&nbsp;nom(s)<br />
                &nbsp;.&nbsp;prénom(s)<br />
                &nbsp;.&nbsp;date d’enterrement connue du défunt<br />
                &nbsp;.&nbsp;dates de décès connues des défunts<br />
                &nbsp;.&nbsp;Lieu où repose la sépulture du défunt<br /><br />

                <span className="font-bold">Finalité du traitement</span><br /><br />

                La plateforme <span className='font-bold'>Sencim.com</span> permet aux internautes de rechercher un ou plusieurs défunts, cimetières et de connaitre l’emplacement des sépultures.
                Ces données proviennent directement des données saisies par les collectivités adhérentes de la plateforme.<br /><br />

                <span className="font-bold">Exercer vos droits</span><br /><br />

                Pour toute information ou exercice de vos droits Informatiques et Libertés sur les traitements de données personnelles gérés par <span className='font-bold'>Sencim.com</span>., vous pouvez faire une reclamation par mail au hello@sencim.com et la demande va être transmise et traitée par son délégué à la protection des données (DPO).<br /><br />

                <span className="font-bold">A propos des cookies</span><br /><br />

                Nous utilisons différents cookies sur le site pour améliorer l’interactivité du site et nos services.<br /><br />

                <span className="font-semibold">Qu'est-ce qu'un "cookie" ?</span><br /><br />

                Un "cookie" est une suite d'informations, généralement de petite taille et identifié par un nom, qui peut être transmis à votre navigateur par un site web sur lequel vous vous connectez. Votre navigateur web le conservera pendant une certaine durée, et le renverra au serveur web chaque fois que vous vous y reconnecterez. Les cookies ont de multiples usages : ils peuvent servir à mémoriser votre identifiant client auprès d'un site marchand, le contenu courant de votre panier d'achat, un identifiant permettant de tracer votre navigation pour des finalités statistiques ou publicitaires, etc.<br /><br />

                <span className="font-bold">2 types de cookies sont déposés sur ce site.</span><br /><br />

                Cookies internes nécessaires au site pour fonctionner.
                Ces cookies permettent au site de fonctionner de manière optimale. Vous pouvez vous y opposer et les supprimer en utilisant les paramètres de votre navigateur, cependant votre expérience utilisateur risque d’être dégradée.<br /><br />

                Cookies tiers destinés à améliorer l’interactivité du site
                Le site de <span className='font-bold'>Sencim.com</span>. s’appuie sur certains services proposés par des sites tiers. Il s’agit notamment :<br />
                &nbsp;.&nbsp;Des boutons de partage sur les réseaux<br /><br />

                Ces fonctionnalités utilisent des cookies tiers directement déposés par ces services. Lors de votre première visite sur cimetieres-de-france.fr, un bandeau vous informe de la présence de ces cookies et vous invite à indiquer votre choix. Ils ne sont déposés que si vous les acceptez ou que vous poursuivez votre navigation sur le site en visitant une seconde page de cnil.fr. Vous pouvez à tout moment vous informer et paramétrer vos cookies pour les accepter ou les refuser en vous rendant sur la page [Gestion des cookies] présente en haut de chaque page du site. Vous pourrez indiquer votre préférence soit globalement pour le site, soit service par service.


              </p>
            </div>
          </div>
        </div>
        <HomeAside />
      </div>

    </>
  );
}
