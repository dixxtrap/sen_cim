import { SharedFlower } from "./shared_flower";
import { Wish } from "./wish.model";
import * as yup from "yup";
export interface Obituary {
  id?: number;

  deceasedFirstname?: string;

  deceasedLastname?: string;

  deceasedDate?: string;

  cause?: string;

  fileName?: string;

  fileUrl?: string;
  placeOfDeath?: string;
  userDisplayName?: string;
  createdAt?: string;
  updatedAt?: string;

  flowers?: SharedFlower[];

  wishes?: Wish[];
}

export const obituarySchema = yup.object({
  deceasedFirstname: yup.string(),

  deceasedLastname: yup.string(),

  deceasedDate: yup.string(),

  cause: yup.string(),

  fileName: yup.string(),

  fileUrl: yup.string(),
  placeOfDeath: yup.string(),
  userDisplayName: yup.string(),
});
