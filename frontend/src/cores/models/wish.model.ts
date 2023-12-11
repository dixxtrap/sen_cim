import * as yup from "yup";
export interface Wish {
  id?: number;
  wish: string;
  sign: string;
  deceasedId?: number;
}
export const wishSchema = yup.object({
  wish: yup
    .string()
    .min(10, "le nombre de caractére doit etre superieur à 10")
    .max(500, "le nombre de caractére doit etre inferieur à 160")
    .required(),
  sign: yup
    .string()
    .min(5, "le nombre de caractére doit etre superieur à 10")
    .max(30, "le nombre de caractére doit etre inferieur à 30")
    .required(),
  deceasedId: yup.number(),
});
