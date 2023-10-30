import { Deceased } from "./deceased.model";
import { Gravesite } from "./gravesite.model";
import * as yup from "yup";
export interface Burial {
  id: number;
  burialDate: string;
  funeralType: string;
  issuingMunicipality: string;
  burialPermitNumber: string;
  issueIn: string;
  createdAt: string;
  updatedAt: string;
  dateOfIssuanceOfThePermit: string;
  receiptNumber: string;
  amountPaid: number;
  allocatedTombVaultArea: string;
  gravesiteId: number;
  deceasedId: number;
  gravesite: Gravesite;
  deceased: Deceased;
}
export interface BurialSearch {
  firstName?: string | "";
  lastName?: string | "";
  year?: number | 0;
}

export const burialSearchSchema = yup.object({
  firstName: yup.string().max(30).required(),
  lastName: yup.string(),
  year: yup.number(),
});
