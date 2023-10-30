import { Flower } from "./flower.model";
import { SharedFlower } from "./shared_flower";
import { Wish } from "./wish.model";

export interface Deceased {
  id: number;
  firstName: string;
  lastName: string;
  placeOfBirth: string;
  placeOfDeath: string;
  dateOfBirth: string;
  dateOfDeath: string;
  gender: string;
  photo: string;
  wishes: [Wish];
  flowers: [SharedFlower];
}
