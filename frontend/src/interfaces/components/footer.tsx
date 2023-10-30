import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="min-h-[400px]  flex flex-col p-3 bg-black">
        <span className="text-3xl font-semibold text-white">SENCIM</span>
        <div className="grid grid-cols-3 py-3 gap-x-5 md:gap-x-16 text-white ">
          <div className="flex flex-col gap-y-3">
            <span className="text-lg font-medium ">À propos</span>
            <span className="text-justify text-sm font-thin ">
              SEN CIMETIÈRES est un projet porté par des jeunes qui ambitionne
              de rendre les cimetières au Sénégal plus “smart” grâce à la
              technologie et mettre un système de digitalisation pour facliter
              leur gestion.
              <br />
              <br />
              Accompagner l’état et les collectivités dans la gestion de l’état
              civil et de la population. Anticiper le futur.
              <br />
              <br />
              Permettre à tout Sénégalais de rendre hommage à la mémoire de son
              défunt plus facilement. Projet lancé en 2023
            </span>
          </div>
          <div className="flex flex-col gap-y-3 font-thin">
            <span className="text-lg font-medium ">Contact et Réseaux</span>
            <span>
              Mail : Hello@sencim.com
              <br />
              <br />
              Téléphone : +221 76 134 18 18
              <br />
              <span className="text-red-500">(Whatsapp uniquement)</span>
            </span>
          </div>
          <div className="font-thin flex flex-col gap-y-3">
            <span className="text-lg font-medium ">Informations</span>

            <div className="flex flex-col gap-4">
              <Link to={"/about_us"}>Qui sommes nous ?</Link>

              <Link to={"/legal_disclaimer"}>Mentions légales</Link>
              <Link to={"/privacy_policy"}>Conditions générales d’utilisation</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#424242] h-8 items-center flex justify-center">
        <span className="w-full  mx-auto text-white text-center">
          Copyright@SENCIM2023{" "}
        </span>
      </div>
    </>
  );
};
