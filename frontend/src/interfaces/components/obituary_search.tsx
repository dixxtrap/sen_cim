import { useForm } from "react-hook-form";
import { Input } from "./custom_input";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import * as Yup from "yup"
export const ObituarySearch = () => {

  return (
    <form className="flex flex-col items-center gap-3 p-3 ring  rounded-md ring-inset ring-kgray-50/20">
        <p className="title text-kgray-400">Rechercher un avis</p>
      <Input label="Nom du défunt : ">
        <input className="input2" />
      </Input>
      <Input label="Prénom du défunt :  ">
        <input className="input2" />
      </Input>
      <Input label="Date de décès :  ">
        <input className="input2" } />
      </Input>
      <button className="btn  btn-blue mx-auto">Rechercher</button>
    </form>
  );
};
