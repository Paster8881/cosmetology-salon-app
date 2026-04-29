import { categories } from "../data/categories";
import { Category } from "../types/Category";

export const getCategories = async ():Promise<Category[]> => {
  return categories
} 
