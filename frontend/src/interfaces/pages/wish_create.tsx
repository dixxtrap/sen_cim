import React from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { HomeAside } from "../components/home_aside";
import { Input } from "../components/custom_input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { wishSchema } from "../../cores/models/wish.model";
import { useAddWishMutation } from "../../cores/features/burial.slice";
import { Loading } from "../components/alert";

export const WishCreate = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const { handleSubmit, register, watch , formState:{errors}} = useForm({
    resolver: yupResolver(wishSchema),
  });
  const [create, { isLoading, isSuccess }] = useAddWishMutation();
  const deceasedId = queryParams.get("deceasedId");
  const burialId = queryParams.get("burialId");
  const _onSubmit = handleSubmit((data) => {
    console.log({ ...data, deceasedId });
    if (deceasedId) data.deceasedId = parseInt(deceasedId!);
    create(data);
  });
  return (
    <>
      <Loading isLoading={isLoading} />
      {isSuccess && (
        <Navigate to={deceasedId ? `/deceased/${burialId}` : `/wish`} />
      )}
      <div className="min-h-[600px] flex p-3">
        <div className="grow flex flex-col gap-y-4">
          {" "}
          <span className=" text-3xl font-bold text-kprimary-500 pb-3">
            {" "}
            Envoyer une prière pour un proche
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 shadow-sm text-center ring-1  ring-kgray-50/30 rounded-md">
              Quand vous laissez une prière sur notre site, chaque dernier
              samedi du mois, un acte symbolique est posé et partagé sur nos
              réseaux sociaux pour l’ensemble des prières redigées par nos
              visiteurs durant le mois. Un acteur symbolique en mémoire de vos
              défunts pour le repos de leurs âmes.
            </div>
            <div className="p-4 shadow-sm text-center ring-1  ring-kgray-50/30 rounded-md"></div>
          </div>
          <div className="ring gap-y-4 ring-kgray-50/10 shadow-md ring-inset rounded-md divide-y">
            <div className="h-12 py-2 px-4">
              <span className="text-xl text-kprimary-500 font-bold">
                Rediger une prière
              </span>
            </div>

            <form className=" p-2 flex flex-col gap-y-3" onSubmit={_onSubmit}>
              <Input label="(caractères utilisés : 11/160)">
                <textarea
                  className="input2"
                  rows={8}
                  placeholder="Rédigez ici"
                  {...register("wish")}
                />
              </Input>
              <Input 
              error={errors.wish?.message} 
              label="(caractères utilisés : 11/160)">
                <input
                  className="input2"
                  placeholder="Signez ici ( Ex : Ta maman chérie)"
                  {...register("sign")}
                />
              </Input>
              <button className="btn primary" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className="w-96">
          <HomeAside />
        </div>
      </div>
    </>
  );
};

export const WishCreateComponent = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(wishSchema),
  });
  const [create, { isLoading, isSuccess }] = useAddWishMutation();

  const _onSubmit = handleSubmit((data) => {
    console.log({ ...data });
    // if (deceasedId) data.deceasedId = parseInt(deceasedId!);
    create(data);
  });
  return (
    <>
      <Loading isLoading={isLoading} />
      {/* {isSuccess && (
        <Navigate to={deceasedId ? `/deceased/${burialId}` : `/wish`} />
      )} */}

      <div className=" flex flex-col ">
        {" "}
        <div className="ring  ring-kgray-50/10 shadow-md ring-inset rounded-md divide-y">
          <div className="h-12 py-2 px-4">
            <span className="text-xl text-kprimary-500 font-bold">
              Rediger une prière
            </span>
          </div>

          <form className=" p-2 flex flex-col gap-y-3" onSubmit={_onSubmit}>
            <Input
              error={errors.wish?.message}
              label={`(caractères utilisés : ${watch("wish")?.length}/160)`}
            >
              <textarea
                className="input2"
                rows={8}
                placeholder="Rédigez ici"
                {...register("wish")}
              />
            </Input>
            <Input
              error={errors.sign?.message}
              label={`(caractères utilisés : ${watch("sign")?.length}/30)`}
            >
              <input
                className="input2"
                placeholder="Signez ici ( Ex : Ta maman chérie)"
                {...register("sign")}
              />
            </Input>
            <button className="btn primary" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
