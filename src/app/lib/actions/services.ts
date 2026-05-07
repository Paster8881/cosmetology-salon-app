import { Service } from "../../types/service";
import { services } from "../data/services";

export const getServices = async (): Promise<Service[]> => {
  return services
}