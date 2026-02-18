import { IconType } from "react-icons";

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: IconType;     // For card
  image: string;      // For service page
}
