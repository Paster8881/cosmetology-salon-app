import { Service } from "../types/Service";
import { services } from "../data/services";

export const getServices = async (): Promise<Service[]> => {
  return services
}