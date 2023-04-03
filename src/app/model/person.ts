import { City } from "./city";
import { Language } from "./language";

export interface Person{
      id: number;

      firstName : string;

      lastName : string;

      email : string;

      localDate : string;

      phone : string;

      address : string;

      webSite: string;

      coverLetter : string;

    gender : string;

    city : City;
    languages: Language[];
}