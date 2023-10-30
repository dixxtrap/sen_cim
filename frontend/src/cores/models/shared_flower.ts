import { Flower } from "./flower.model";
import * as yup from "yup";
export interface SharedFlowerCreate {
  flowerId?: number;
  comment: string;
  sign: string;
  deceasedId?: number;
}
export interface SharedFlower extends SharedFlowerCreate {
  id?: number;

  createdAt?: string;
  updatedAt?: string;
  flower?: Flower;
}

export const sharedFlowerSchema = yup.object({
  comment: yup
    .string()
    .min(10, "le nombre de caractére doit etre superieur à 10")
    .max(160, "le nombre de caractére doit etre inferieur à 160")
    .required(),
  sign: yup
    .string()
    .min(10, "le nombre de caractére doit etre superieur à 10")
    .max(30, "le nombre de caractére doit etre inferieur à 30")
    .required(),
  deceasedId: yup.number(),
  flowerId: yup.number(),
});
