import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_sen_cim.png";
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import toTop from "../../assets/toTop.png"

export const Footer = () => {
  return (
    <>
      <div className="h-[500px]  flex flex-col pt-10 pl-10 bg-black ">
        <Link to={"/"} className="flex flex-shrink-0 items-center">
          <span className="text-3xl  font-bold ml-2 text-white">
            SenCim<span className="text-kprimary-500">.</span>
          </span>
        </Link>
        <div className="flex flex-row ">
          <div className="grid grid-cols-3 py-3 gap-x-5 md:gap-x-16 text-white space-x-36 px-1 ">
            <div className="flex flex-col gap-y-3">
              <span className="text-lg font-medium ">À propos</span>
              <span className="text-justify font-thin ">
                Bienvenue sur cet espace dédié aux<br />
                cimetières du Sénégal ainsi qu’aux<br />
                sépultures des défunts qui les<br />
                composent.
              </span>
            </div>
            <div className="flex flex-col gap-y-3 font-thin">
              <span className="text-lg font-medium ">Contact et Réseaux</span>
              <span>
                Mail : Hello@sencim.com
                <br />
                <br />
                <div className="flex flex-row">
                  <img
                    className=" h-8 w-auto "
                    src={facebook}
                    alt="Your Company"
                  />
                  <img
                    className=" h-8 w-auto mx-6"
                    src={linkedin}
                    alt="Your Company"
                  />
                  <img
                    className="h-8 w-auto "
                    src={instagram}
                    alt="Your Company"
                  />
                </div>
                <br />
                {/* <span className="text-red-500">(Whatsapp uniquement)</span> */}
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
          <a className="h-11 w-11 bg-white mt-96 rounded-lg flex place-content-center py-2" href="#top" >
            <img
              className="h-6 w-auto "
              src={toTop}
              alt="Your Company"
            />
          </a>

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
