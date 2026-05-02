import { categories } from "./data/categories";
import { Category } from "../types/сategory";

export const getCategories = async ():Promise<Category[]> => {
  return categories
} 
