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
    
    .required(),
  sign: yup
    .string()
    .required(),
  deceasedId: yup.number(),
  flowerId: yup.number(),
});
