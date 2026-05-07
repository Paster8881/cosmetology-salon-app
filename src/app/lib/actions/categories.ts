import { Category } from "../../types/сategory";
import {prisma} from "../prisma"

export const getCategories = async ():Promise<Category[]> => {
  return await prisma.category.findMany();
} 
