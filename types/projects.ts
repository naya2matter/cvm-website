export type ProjectCategory =
  | "Pizza Stores"
  | "Retail Shops"
  | "Cafes"
  | "Restaurants";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: ProjectCategory;
}
