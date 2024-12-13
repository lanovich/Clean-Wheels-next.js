import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { SubProduct } from '@prisma/client'

export const getAll = async (): Promise<SubProduct[]> => {
  return (await axiosInstance.get<SubProduct[]>(ApiRoutes.SUB_PRODUCTS)).data
}