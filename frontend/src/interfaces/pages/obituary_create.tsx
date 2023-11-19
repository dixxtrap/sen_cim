import { useForm } from "react-hook-form";
import { Input } from "../components/custom_input";
import { HomeAside } from "../components/home_aside";
import { TopHeader2 } from "../components/top_header";
import { Obituary, obituarySchema } from "../../cores/models/obituary";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { handlePreview } from "../../utils/handlePreviewImage";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useGetObituaryQuery } from "../../cores/features/obituary";
import { useNavigate, useNavigation } from "react-router-dom";
import { formatDate } from "../../utils/format_date";

export const ObituaryCreate = () => {
  
  const nav = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(obituarySchema),
  });
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();
  const [changed, setChanged] = useState<boolean>(false);
  const { refetch } = useGetObituaryQuery("")
  const handleImage = handlePreview({
    previewImage: preview!,
    setPreviewImage: setPreview,
    setFile,
    setChanged,
  });
  const _onsubmit = handleSubmit(async (data: Obituary) => {
    console.log(data);
    const formData = new FormData();
    formData.append("deceasedDate", data.deceasedDate!);
    formData.append("deceasedFirstname", data.deceasedFirstname!);
    formData.append("deceasedLastname", data.deceasedLastname!);
    formData.append("age", data.age!.toString())
    formData.append("category", data.category!)
    formData.append("cause", data.cause!);
    formData.append("userDisplayName", data.userDisplayName!);
    formData.append("placeOfDeath", data.placeOfDeath!)
    formData.append("file", file!);

    const response = await fetch("/v1/obituary", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      await refetch();
      nav("/obituary");
    }
  });
  const categories = [
    { id: 1, name: 'Souvenir' },
    { id: 2, name: 'Anniversaire' },
    { id: 3, name: 'Avis de décès' },
  ]
  return (
    <>
      <TopHeader2 className="bg_jardin">
        <span className=" text-xl md:text-2xl font-medium text-center text-white max-w-lg">
          Repos et paix en mémoire de nos proches partis avant nous. À ceux là
          que nous avons aimés, que leurs âmes reposent en paix.
        </span>
      </TopHeader2>
      <div className="flex p-1 ">
        <div className="grow">
          <form
            className="grow rounded-md ring-1 h-full divide-y"
            onSubmit={_onsubmit}
          >
            <div className="p-2">
              <span className="title">
                Publier un souvenir, un anniversaire, un avis de décès
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex  p-2 md:p-4  gap-4 flex-row-reverse">
                <div className="w-40 h-40 bg-[#d9d9d9] rounded-full">
                  <label
                    htmlFor={`img`}
                    className="w-full h-full flex items-center justify-center min-w-fit"
                  >
                    <input
                      key={`img`}
                      title={`img`}
                      hidden={true}
                      // onChange={handleFileChange}
                      id={`img`}
                      type={`file`}
                      name={`img`}
                      onChange={handleImage}
                    />
                    {preview && preview !== undefined ? (
                      <img
                        src={preview}
                        alt="no file"
                        className={"w-full h-full rounded-full"}
                      />
                    ) : (
                      <div className="">
                        <CameraIcon className={" h-8 text-slate-700  px-7"} />
                        <span className="text-xs">Ajouter une photo<br/></span>
                        <span className="text-xs px-5">du défunt</span>
                      </div>
                      
                    )}
                  </label>
                </div>

                <div className="grow  h-[700px]">
                  <div className="grow  flex flex-col gap-7 ">
                    <Input label="Choisir la catégorie">
                      <select className="input2" defaultValue={categories[2].name} {...register("category")}>
                        {categories.map((categorie) => (
                          <option value={categorie.name} >{categorie.name}</option>
                        ))}
                      </select>
                    </Input>
                    <Input label="Nom du défunt : ">
                      <input
                        className="input2"
                        {...register("deceasedLastname")}
                      />
                    </Input>
                    <Input label="Prenom du défunt :">
                      <input
                        className="input2"
                        {...register("deceasedFirstname")}
                      />
                    </Input>
                    <Input label="Date de décès :">
                      <input
                        type="date"
                        className="input2"
                        {...register("deceasedDate")}
                      />
                    </Input>
                    <Input label="Age du défunt :" error={errors.age?.message}>
                      <input
                        type="number"
                        className="input2"
                        {...register("age")}
                      />
                    </Input>
                    <Input label="Lieu de décès :">
                      <input className="input2" {...register("placeOfDeath")} />
                    </Input>
                    <Input label="Cause de décès (facultatif) : ">
                      <input className="input2" {...register("cause")} />
                    </Input>
                    <Input label="Votre nom :  ">
                      <input
                        className="input2"
                        {...register("userDisplayName")}
                      />
                    </Input>
                    <div className="flex flex-col gap-6">
                      <span className="text-xs">
                        NB : En continuant la procédure, vous donnez
                        formellement votre accord pour cette publication.{" "}
                      </span>
                      <span className="text-xs">
                        Toutes les publications sont automatiquement supprimées
                        après le délai de publication que vous aurez choisi lors
                        du paiement.{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  p-2 my-12 gap-4">
                <div className="grow flex justify-center">
                  <span className="text-lg text-center leading-6 my-auto py-4 ring-1 ring-kprimary-300 px-5 md:px-10 rounded-md shadow-sm shadow-kprimary-200">
                    Publiez votre avis de décès au prix de{" "}
                    <span className="text-kprimary-500 font-bold">
                      {" "}
                      3500xof / jour
                    </span>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-40 h-10 bg-green-500 text-white rounded-md"
                >
                  Continuer{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
        <HomeAside />
      </div>
    </>
  );
};
