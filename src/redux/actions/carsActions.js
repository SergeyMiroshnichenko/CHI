import { carsConsts } from "../constans/cars";

 export const getCarsAction = (payload) => ({
    type: carsConsts.GET_CARS,
    payload
 })
 